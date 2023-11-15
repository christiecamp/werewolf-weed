//import connection object
const mysql = require('mysql2');
const inquirer = require('inquirer');
const { printTable } = require('console-table-printer');
// const input = require('./lib/input.js');

//mysql connection
const howl = mysql.createConnection(
    {
    host: '127.0.0.1', //local host
    port: 3306, //port created with mysql download.
    user: 'root',
    password: '',
    database: 'werewolf_db',
    },
);

//contect to database
howl.connect( () => {
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
    ================================================
    ****************   Welcome to  *****************
    **************   WEREWOLF WEED  ****************
    ************   Employee Database  **************
    ================================================
    `);
    inquirer
        .prompt(
            {
            type: 'list',
            name: 'options',
            message: 'Select from the options below:',
            choices: [
                'view departments',
                'view roles',
                'view employees',
                'add department',
                'add role',
                'add employee',
                'update employee role',
                'view employee by manager',
                'update employee manager',
                'delete department',
                'delete role',
                'delete employee',
                'view total utilized budget by department',
                'quit',
                ],
        }) //user input
        .then((output) => { //output
            switch (output.options) {
                case "view departments":
                    viewDept();
                    break;
                case 'view roles':
                    viewRole();
                    break;
                case 'view employees':
                    viewEmp();
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
                case 'quit':
                    howl.end();
                    return;
                default:
                    break;
            }
        })
        .catch(err => {
            console.log(err);
        });
};

//view all 
//department
function viewDept() {
   howl.query(`SELECT * FROM department`, (err, res) => {
        if (err) throw err;
        console.log(`
viewing all departments:

    =============
        `);
        printTable(res);
        console.log(`
    =============
        `);
    toke();
   });
};
//roles
function viewRole() {
    let query =
    `SELECT role.id,
    role.title, 
    role.salary, 
    department.name AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id
    ORDER BY role.id ASC`;
    howl.query(query, (err, res) => {
         if (err) throw err;
         console.log(`
                    viewing all roles:
 
    ================================================
    `);
        printTable(res);
        console.log(`
    ================================================
           `);
     toke();
    });
 };

 function viewEmp() {
    let query = 
    `SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    department.name AS 'department',
    role.salary 
    FROM employee, role, department
    WHERE department.id = role.department_id 
    AND role.id = employee.role_id 
    ORDER by employee.id ASC`;
    howl.query(query, (err, res) => {
         if (err) throw err;
         console.log(`
                    viewing all employees:

    ================================================
       `);
         printTable(res);
         console.log(`
    ================================================
           `);
     toke();
    });
 };


// //add department
// function addDept(output) {
//     let query =
//         `INSERT INTO department (name) VALUES (?)`;
//     howl.query(query, [output.addDept], (err,res) => {
//         if (err) throw err;
//         console.log('department added!');
//     toke();
//     });
// };


// //add role
// function addRole() {
//     let query =
//         ``
//     howl.query(query, (err,res) => {
//         if (err) throw err;
//         console.log('role added!');
//     toke();
//     });
// };


// //add employee
// function addEmp() {
//     let query =
//         ``
//     howl.query(query, (err, res) => {
//         if (err) throw err;
//         console.log('employee added!');
//     toke();
//     });
// };


// //update employee role
// function updateRole() {
//     let query =
//         ``
//     howl.query(query, (err, res) => {
//         if (err) throw err;
//         console.log('role updated!');
//     toke();
//     });
// };


// //view employee by manager
// function viewMng() {
//     let query =
//         ``
//     howl.query(query, (err, res) => {
//         if (err) throw err;
//         console.log('viewing employee by manager');
//     toke();
//     });
// };


// //update employee manager
// function updateMng() {
//     let query =
//         ``
//     howl.query(query, (err, res) => {
//         if (err) throw err;
//         console.log('employee manager updated!');
//     toke();
//     });
// };


// //delete department
// function deleteDept() {
//     let query =
//         ``
//     howl.query(query, (err, res) => {
//         if (err) throw err;
//         console.log('department deleted!');
//     toke();
//     });
// };


// //delete role
// function deleteRole() {
//     let query =
//         ``
//     howl.query(query, (err, res) => {
//         if (err) throw err;
//         console.log('role deleted!');
//     toke();
//     });
// };


// //delete employee
// function deleteEmp() {
//     let query =
//         ``
//     howl.query(query, (err,res) => {
//         if (err) throw err;
//         console.log('employee deleted!');
//     toke();
//     });
// };


// //view total utilized budget of a department
// function viewBdgt() {
//     let query = 
//         ``
//     howl.query(query, (err, res) => {
//         if (err) throw err;
//         console.log('budget by department');
//     });
// };

// end
function end() {
    console.log(`

        .===. (
        |   |  )
        |   | (
        |   | )
        |   \*/
      ,'    //.
     :~~~~~//~~;      
      `.  // .'
    ww`-------'
    
`)};
