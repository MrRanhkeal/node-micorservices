const { login, register, logout,getlist,remove,resetpassword } = require('./../controller/auth.controller');
module.exports = (app) => {
    app.post('/api/auth/register', register);
    app.post('/api/auth/login', login);
    app.post('/api/auth/logout', logout);
    app.get('/api/auth/getlist', getlist);
    app.get('/api/auth/delete/:id', remove);
    app.get('/api/auth/resetpassword/:id', resetpassword);

}