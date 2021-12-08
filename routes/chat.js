const { getSpeechToken } = require('../controllers/chat');

const speechTokenOpts = {
    handler: getSpeechToken
}
const chatOpts = {
    handler: (req, res) => {
        res.send(JSON.stringify({msg: 'success'}))
    }
}

function chatRoutes(fastify, options, next) {
    fastify.get('/api/get-speech-token', speechTokenOpts)
    fastify.get('/api/getData', chatOpts)
    next();
}

module.exports = chatRoutes;