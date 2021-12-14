const { TurnContext } = require('botbuilder');
const { OrchestratorRecognizer } = require('botbuilder-ai-orchestrator');
const { DialogContext, DialogSet } = require('botbuilder-dialogs');
const { LuisRecognizer } = require('botbuilder-ai');

class Orchestrator {
    constructor(adapter) {
        this.adapter = adapter;
        this.dispatchRecognizer = new OrchestratorRecognizer().configure({
            modelFolder: process.env.ModelFolder,
            snapshotFile: process.env.SnapshotFile
        });
    }

    async recognize(req) {
        let context = new TurnContext(this.adapter, req);
        const dc = new DialogContext(new DialogSet(), context, { dialogStack: [] });        
        context.activity['text'] = req.body['query']
        context.activity['serviceUrl'] = 'https://smba.trafficmanager.net/emea/'
        context.activity['conversation'] = { id: 'a:109i1P80jdftcS9x' }

        var recognizerResult = await this.dispatchRecognizer.recognize(dc, context.activity);

        const luisConfig = { 
                applicationId: process.env.LuisAppId, 
                endpointKey: process.env.LuisAppKey, 
                endpoint: `https://${ process.env.LuisHostName }.api.cognitive.microsoft.com` 
            };
        const recognizerOptions = {
                // apiVersion: 'v3',
                includeAllIntents: true,
                includeInstanceData: true,
                slot: process.env.LuisSlot
            };
        const luisRecognizer = new LuisRecognizer(luisConfig, recognizerOptions, true);
        var luisRecognizerResult = await luisRecognizer.recognize(context);
        console.log(`LUIS Recognizer result : ${JSON.stringify(luisRecognizerResult, null, 4)}`)
        console.log(luisRecognizerResult['luisResult']['topScoringIntent']['intent'])
        return recognizerResult;
    }
}

module.exports.Orchestrator = Orchestrator;