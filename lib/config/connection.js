//db connection to mysql
const sequelize = require('sequelize');
require('dotenv').config();

const howl = new sequelize(
    process.env.database,
    process.env.user,
    process.env.password,
    {
        // Database location
        host: 'localhost',
        dialect: 'mysql',
        port: 3013
    }
);

module.exports = howl;
