const { create, getlist, remove, orderdetail} = require('./../controller/order.controller');

module.exports = (app) => {
    app.post('/api/order/create', create);
    app.post('/api/order/orderdetail', orderdetail); 
    app.post('/api/order/getorderlist', getlist);
    app.get('/api/order/delete/:id',remove);  
};