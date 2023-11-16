//db connection to mysql
const mysql = require('mysql2');
require('dotenv').config();

//mysql connection
const howl = mysql.createConnection(
    {
    host: '127.0.0.1', //local host
    port: 3306, //port created with mysql
    user: 'root',
    password: '',
    database: 'werewolf_db',
    },
);

module.exports = howl;
