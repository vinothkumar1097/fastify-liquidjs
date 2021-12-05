var items = require('../assets/data');

// GET all items
const getItems = (req, res) => {
    res
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(items);
}

module.exports = {
    getItems,
}
