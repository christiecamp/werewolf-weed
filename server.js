const inquirer = require('inquirer');
const mysql = require('mysql2');
const input = require('./lib/input.js');
//import connection object
const sequelize = require('./lib/config/connection');
require ('dotenv').config();
