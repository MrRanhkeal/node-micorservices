const express = require('express');
const app = express();
const cors = require('cors');
const porxy = require('express-http-proxy');

const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(cors());


app.use('/auth', porxy('http://auth-service:3000'));
app.use('/customers', porxy('http://customers-service:3001'));
app.use('/products', porxy('http://product-service:3002'));
app.use('/orders', porxy('http://order-service:3003'));
app.use('/payments', porxy('http://payment-service:3004'));


app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});