const { getItems } = require('../controllers/items')
const { TurnContext, BotFrameworkAdapter } = require('botbuilder');
const { OrchestratorRecognizer } = require('botbuilder-ai-orchestrator');
const { DialogContext, DialogSet } = require('botbuilder-dialogs');
const { LuisRecognizer } = require('botbuilder-ai');

const adapter = new BotFrameworkAdapter({
    appId: "c7028e99-1d9b-4ad7-a873-92e178d98aef",
    appPassword: "bz-7Q~mFY8HjF9lRbnKanm~_R7WNGigSKEmut"
});
adapter.onTurnError = async (context, error) => {
    console.log('error occured', error)
}
const dispatcher = new OrchestratorRecognizer().configure({
    modelFolder: "./orchestrator/model",
    snapshotFile: "./orchestrator/generated/orchestrator.blu"
});

// declaring options
const ItemSchema = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'}
    }
}

const getItemsOpts = {
    schema: {
        description: 'GET ALL ITEMS',
        response: {
            200: {
                type: 'array',
                items: ItemSchema
            }
        }
    },
    handler: getItems
}

const postMsgOpts = {
    handler: async (req, res) => {
        console.log(req.body)
        let context = new TurnContext(adapter, req);
        const dc = new DialogContext(new DialogSet(), context, { dialogStack: [] });        
        context.activity['text'] = req.body['query']
        context.activity['serviceUrl'] = 'https://smba.trafficmanager.net/emea/'
        context.activity['conversation'] = { id: 'a:109i1P80jdftcS9x' }
        // context.activity = {
        //     text: 'what is nessie',
        //     serviceUrl: 'https://smba.trafficmanager.net/emea/',
        //     conversation: {
        //         conversationType: 'personal',
        //         tenantId: '0b953050-1512-4563-a097-6e7f58b55eb1',
        //         id: 'a:109i1P80jdftcS9xKS7attil16Fg7JuEQdX0TWqo7BctsODQGNB6ZYa5fFZEUq1PMWQKCCZsdlSA6t2f6PnJiTxZY2iVl1C-tlzlNqgkYfgQSgSMN9hiHgv55niIMXodV'
        //       }
        //   }
        var recognizerResult = await dispatcher.recognize(dc, context.activity);
        // console.log(JSON.stringify(recognizerResult, null, 4))

        const luisConfig = { 
                applicationId: "958318be-2359-4c44-9931-42625342f80e", 
                endpointKey: "2cd16b26b9b94dfd9caa2756b9f5f514", 
                endpoint: `https://westeurope.api.cognitive.microsoft.com` 
            };
        const recognizerOptions = {
                // apiVersion: 'v3',
                includeAllIntents: true,
                includeInstanceData: true,
                slot: "production"
            };
        const luisRecognizer = new LuisRecognizer(luisConfig, recognizerOptions, true);
        var luisRecognizerResult = await luisRecognizer.recognize(context);
        console.log(`LUIS Recognizer result : ${JSON.stringify(luisRecognizerResult, null, 4)}`)
        console.log(luisRecognizerResult['luisResult']['topScoringIntent']['intent'])
        return res.send(JSON.stringify(recognizerResult))
        // console.log(req.url)
        // res.send(JSON.stringify({name: 'vinoth'}))
    }
}

function itemRoutes(fastify, options, next) {

    fastify.get('/items', getItemsOpts)
    fastify.post('/msg', postMsgOpts)

    next();
}

module.exports = itemRoutes;