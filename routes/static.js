const { home, chat } = require('../controllers/static');

const homeOpts = {
    handler: home
}
const chatOpts = {
    handler: chat
}

function staticRoutes(fastify, options, next) {
    fastify.get('/home/:msg', homeOpts)
    fastify.get('/chat', chatOpts)
    next();
}

module.exports = staticRoutes;