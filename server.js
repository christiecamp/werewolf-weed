const inquirer = require('inquirer');
const mysql = require('mysql2');
const input = require('./lib/input.js');
const output = require('./lib/db/output.js');
//import connection object
const howl = require('./lib/config/connection');

//contect to database
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
    toke();
});

//initialize server
function toke() {
    //one of the console.logs will change to be a large banner - looking to use figlet and chalk (chalk - can change text styling in console.log)
    console.log (`
    *****************
        Welcome to 
      WEREWOLF WEED
    Employee Database
    *****************
    `);

    //user prompts - not sure how i want to seperate, but would like to keep server.js file clean and tidy, with information imported
    inquirer
        .prompt(input) //user input
        .then((output) => {
            //response - switchcase? function - this needs to be the output, but where should I store? create a seperate file? or add in input file?
        })
        .catch(err => {
            console.log(err);
        });
};



//seperate these into a new file?

//view employees
//add employee
//update employee role
//view employee by manager
//update employee manager
//delete employee

//view roles
//add role
//delete role

//view departments
//add department
//delete department

//view total utilized budget of a department

