const { home } = require('../controllers/static');

const homeOpts = {
    handler: home
}

function staticRoutes(fastify, options, next) {

    fastify.get('/home/:msg', homeOpts)

    next();
}

module.exports = staticRoutes;