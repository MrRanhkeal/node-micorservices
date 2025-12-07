const { create, update, getlist, remove } = require('../controller/product.controller');

module.exports = (app) =>{
    app.post('/api/product', create);
    app.put('/api/product', update);
    app.get('/api/product', getlist);
    app.delete('/api/product', remove);
}