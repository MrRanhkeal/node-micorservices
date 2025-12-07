const { create, update, getlist, remove } = require('./../controller/role.controller');

module.exports = (app) => {
    app.post('/api/role/create', create);
    app.post('/api/role/update', update);
    app.post('/api/role/getlist', getlist);
    app.get('/api/role/delete/:id',remove);
}

