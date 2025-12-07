const { create, update, getlist, remove } = require('../controller/categorie.controller');
module.exports = (app) =>{
    app.post('/api/categories', create);
    app.put('/api/categories', update);
    app.get('/api/categories', getlist);
    app.delete('/api/categories', remove);
}