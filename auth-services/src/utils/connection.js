
const mysql = require('mysql2/promise');
const { config } = require('./config');

const pool = mysql.createPool({
    host: config.db.HOST,
    user: config.db.USER,
    password: config.db.PASSWORD,
    database: config.db.DATABASE,
    port: config.db.PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool