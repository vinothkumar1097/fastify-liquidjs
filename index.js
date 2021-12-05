const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});

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
fastify.register(require('./routes/items'));
fastify.register(require('./routes/static'));

// Handle 404 errors (Page not found)
fastify.setNotFoundHandler({
    preValidation: (req, reply, done) => {
      reply.send('page not found');
      done()
    },
    // preHandler: (req, reply, done) => {
    //   reply.send('pages not found');
    //   done()
    // }
  }, function (request, reply) {
      // Default not found handler with preValidation and preHandler hooks
  })

  // Handle 500 error
fastify.setErrorHandler(function (error, request, reply) {
    // Log error
    this.log.error(error)
    // Send error response
    reply.status(409).send({ ok: false })
  })

// Display available routes when initializing
fastify.ready(() => {
console.log(fastify.printRoutes())
})

const start_server = async() => {
    try {
        const PORT = parseInt(process.env.SERVER_PORT);
        await fastify.listen(PORT, () => console.log('SERVER LISTENING AT PORT : '+ PORT));
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}
start_server();