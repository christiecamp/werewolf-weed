//db connection to mysql
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
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

module.exports = sequelize;