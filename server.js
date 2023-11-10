const inquirer = require('inquirer');
const mysql = require('mysql2');
const input = require('./lib/input.js');
//import connection object
const howl = require('./lib/config/connection');
require ('dotenv').config();

//contect to db
howl.connect (err => {
    if (err) throw err;
    //message displayed at connection
    console.log (`
    *****************
        Welcome to 
      WEREWOLF WEED
    Employee Database
    *****************
    `);
    //run app
    firstToke ()
});

//initialize app
function firstToke () {

    //message displayed at connection
    console.log (`
    *****************
        Welcome to 
      WEREWOLF WEED
    Employee Database
    *****************
    `);

    //user prompts
    inquirer
        .prompt(input) //user input? keeping as placeholder
        .then((output) => {
            //response - switchcase? function
        })
        .catch(err => {
            console.log(err);
        });
};