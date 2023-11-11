const inquirer = require('inquirer');
const mysql = require('mysql2');
const input = require('./lib/input.js');
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
    
    inquirer
        .prompt(input) //user input
        .then((output) => {
            switch (output.action) {
                case 'view departments':
                    viewAll('department');
                    break;
                case 'view roles':
                    viewAll('role');
                    break;
                case 'view employees':
                    viewAll('employee');
                    break;
                case 'add department':
                    addDept(); 
                case 'add role':
                    addRole();
                    break;
                case 'add employee':
                    addEmp();
                    break;
                case 'update employee role':
                    updateRole();
                    break
                case 'view employee by manager':
                    empMng();
                    break;
                case 'update employee manager':
                    updateMng();
                    break;
                case 'delete department':
                    deleteDept();
                    break;
                case 'delete role':
                    delteRole();
                    break;
                case 'delete employee':
                    deleteEmp();
                    break
                case 'view total utilized budget by department':
                    viewBdgt();
                    break;
                default:
                    howl.end();
            };
        })
        .catch(err => {
            console.log(err);
        });
};

