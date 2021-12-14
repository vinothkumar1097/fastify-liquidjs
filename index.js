const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});

const { BotFrameworkAdapter } = require('botbuilder');
const adapter = new BotFrameworkAdapter({
  appId: process.env.MicrosoftAppId,
  appPassword: process.env.MicrosoftAppPassword
});
// const { AtosSiri } = require('./providers/bot');
// const myBot = new AtosSiri();

const POV = require('point-of-view');
const { Liquid } = require('liquidjs');

const querystring = require('querystring');
const fastify = require('fastify')({
    logger: true,
    querystringParser: str => querystring.parse(str.toLowerCase())
});

// Register assets (https://github.com/fastify/fastify-static)
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'assets'),
    prefix: '/assets/', // optional: default '/'
  })

// Generate Liquid Engine
const engine = new Liquid({
    // cache: true,    // for production
    root: path.join(__dirname, "views"),
    extname: ".html",
  })

// Register the liquid engine with fastify server
fastify.register(POV, {
    engine: {
        liquid: engine,
    },
})

// Register config and routes
fastify.register(require('./routes/items'), { adapter, name: 'vinoth' });
fastify.register(require('./routes/static'));
fastify.register(require('./routes/chat'));

// Handle 404 errors (Page not found - https://www.fastify.io/docs/v3.8.x/Server/#setnotfoundhandler)
fastify.setNotFoundHandler({
    preValidation: (req, reply, done) => {
      reply.send('page not found');
      // reply.redirect('/home/tst');
      done()
    },
    // preHandler: (req, reply, done) => {
    //   reply.send('pages not found');
    //   done()
    // }
  }, function (request, reply) {
      // Default not found handler with preValidation and preHandler hooks
  })

  // Handle 500 error - https://www.fastify.io/docs/latest/Reply/#redirectcode--dest
fastify.setErrorHandler(function (error, request, reply) {
  request.log.warn(error)
  var statusCode = error.statusCode >= 400 ? error.statusCode : 500
  reply
    .code(statusCode)
    .type('text/plain')
    .send(statusCode >= 500 ? 'Internal server error' : error.message)
})

// Display available routes when initializing
fastify.ready(() => {
console.log(fastify.printRoutes())
})

const start_server = async() => {
    try {
        const PORT = parseInt(process.env.port || process.env.PORT || 5000);
        await fastify.listen(PORT, () => console.log('SERVER LISTENING AT PORT : '+ PORT));
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}
start_server();