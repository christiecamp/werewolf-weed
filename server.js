//import connection object
// const howl = require('./lib/config/connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const input = require('./lib/input.js');
// const output = require('./working-output.js');

//mysql connection
const howl = mysql.createConnection({
    host: 'localhost',
    port: 3013,
    database: 'werewolf_DB',
    user: 'root',
    password: '', 
});

//contect to database
howl.connect (err => {
    if (err) throw err;
    //message displayed at connection
    console.log (`
    ╔═══╗     ╔╗              ╔═╗╔═╗
    ║╔══╝     ║║              ║║╚╝║║
    ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
    ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
    ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
    ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
           ║║      ╔═╝║                     ╔═╝║    
           ╚╝      ╚══╝                     ╚══╝   DB
    `);
    //run app
    toke();
});

//initialize server
function toke() {
    //message displayed with function
    console.log (`
    *******************
    *** Welcome to ****
    ** WEREWOLF WEED **
    *Employee Database*
    *******************
    `);
    inquirer
        .prompt(input) //user input (change to inhale)
        .then((output) => { //output
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
                    break;
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
                    viewMng();
                    break;
                case 'update employee manager':
                    updateMng();
                    break;
                case 'delete department':
                    deleteDept();
                    break;
                case 'delete role':
                    deleteRole();
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

//will move to new file once there is functionality.

//view all - departments, roles, employees
function viewAll(output) {
        //departments
    if (output === 'department') {
        howl.query = `SELECT * FROM department`;
        console.log('viewing all departments');
        //roles
    } else if (output === 'role') {
        howl.query = `SELECT * FROM role`;
        console.log('viewing all roles');
        //employees
    } else if (output === 'employee') {
        howl.query = `SELECT * FROM employee`;
        console.log('viewing all employees');
    };
};


//add department
function addDept() {
    let query =
        ``
    howl.query(query, (err,res) => {
        if (err) throw err;
        console.log('department added!');
    toke();
    });
};


//add role
function addRole() {
    let query =
        ``
    howl.query(query, (err,res) => {
        if (err) throw err;
        console.log('role added!');
    toke();
    });
};


//add employee
function addEmp() {
    let query =
        ``
    howl.query(query, (err, res) => {
        if (err) throw err;
        console.log('employee added!');
    toke();
    });
};


//update employee role
function updateRole() {
    let query =
        ``
    howl.query(query, (err, res) => {
        if (err) throw err;
        console.log('role updated!');
    toke();
    });
};


//view employee by manager
function viewMng() {
    let query =
        ``
    howl.query(query, (err, res) => {
        if (err) throw err;
        console.log('viewing employee by manager');
    toke();
    });
};


//update employee manager
function updateMng() {
    let query =
        ``
    howl.query(query, (err, res) => {
        if (err) throw err;
        console.log('employee manager updated!');
    toke();
    });
};


//delete department
function deleteDept() {
    let query =
        ``
    howl.query(query, (err, res) => {
        if (err) throw err;
        console.log('department deleted!');
    toke();
    });
};


//delete role
function deleteRole() {
    let query =
        ``
    howl.query(query, (err, res) => {
        if (err) throw err;
        console.log('role deleted!');
    toke();
    });
};


//delete employee
function deleteEmp() {
    let query =
        ``
    howl.query(query, (err,res) => {
        if (err) throw err;
        console.log('employee deleted!');
    toke();
    });
};


//view total utilized budget of a department
function viewBdgt() {
    let query = 
        ``
    howl.query(query, (err, res) => {
        if (err) throw err;
        console.log('budget by department');
    });
};