const { getItems } = require('../controllers/items')

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


function itemRoutes(fastify, options, next) {

    fastify.get('/items', getItemsOpts)

    next();
}

module.exports = itemRoutes;