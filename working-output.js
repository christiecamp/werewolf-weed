const howl = require('./lib/config/connection');
const inquirer = require('inquirer');

//functions

//view all
function viewAll(output) {
if (output === 'department') {
    howl.query = `SELECT * FROM department`;
    console.log('viewing all departments');
} else if (output === 'role') {
    howl.query = `SELECT * FROM role`;
    console.log('viewing all roles');
} else if (output === 'employee') {
    howl.query = `SELECT * FROM employee`;
    console.log('viewing all employees');
}};


//add new department

//add new role

//add new employee

//delete department

//delete role

//delete employee

//update role

//view employee by manager

//update manager

//view budget

module.exports = output;