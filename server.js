//import connection object
const howl = require('./lib/config/connection');
const inquirer = require('inquirer');
const { printTable } = require('console-table-printer');
// const input = require('./lib/input.js');

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
        .prompt({
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
                    end();
                    return;
                default:
                    break;
            };
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

//employees
 function viewEmp() {
    let query = 
    `SELECT employee.id, 
    employee.first_name AS 'first name', 
    employee.last_name AS 'last name', 
    role.title, 
    department.name AS department,
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


//add
//department
function addDept() {
    inquirer
    .prompt({
        type: 'input',
        name: 'department',
        message: 'What is the name for the department?',
        validate: addDeptInput => {
            if (addDeptInput) {
                return true;
            }
            return console.log ('\n You must enter a department name');
        },
    })
    .then((output) => {
        let query = `INSERT INTO department SET ?`;
        howl.query(query, 
        {
            name: output.department,
        },
        (err, res) => {
            if (err) throw err;
            console.log(`
        Successfully added ${output.addDept} to database!

    ================================================
                `);
            toke(); 
        });  
    });
};

//role
function addRole() {
    let query =
        `SELECT * FROM department`;
    howl.query(query, (err, res) => {
        if (err) throw err;
        let departments = res.map(department => ({name: department.name, value: department.id}));
        inquirer
        .prompt([
            //role title
            {
                type: 'input',
                name: 'title',
                message: `What is the role's name?`,
                validate: addRoleTitle => {
                    if (addRoleTitle) {
                        return true;
                    }
                    return console.log ('\n You must enter a role name');
                },
            },
            //add salary
            {
                type: 'input',
                name: 'salary',
                message: `What is the salary for this role?`,
                validate: addRoleSalary => {
                    if (addRoleSalary) {
                        return true;
                    }
                    return console.log ('\n You must enter a salary for the role');
                },
            },
            //choose department
            {
                type: 'list',
                name: 'id',
                message: `Choose the department for this role:`,
                choices: departments,
            },
        ])
        .then((output) => {
            let query = 
                `INSERT INTO role SET ?`;
            howl.query(query, 
                {
                    title: output.title,
                    salary: output.salary,
                    department_id: output.id,
                },
                (err,res) => {
                    if (err) throw err;
                    console.log(`
        Successfully added ${output.title} to database!
        
    ================================================
                    `);
             toke(); 
            });
        });
    });
};

//employee
function addEmp() {
    //role
    howl.query(`SELECT * FROM role;`, (err,res) => {
        if (err) throw err;
        let roles = res.map(role => ({name: role.title, value: role.id}));
        //manager
        howl.query(`SELECT * FROM employee;`, (err, res) => {
            if (err) throw err;
            let managers = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id}));
            inquirer
            .prompt([
            //first name
                {
                    type: 'input',
                    name: 'firstName',
                    message: `Enter in the employee's first name:`,
                    validate: addFirstName => {
                        if (addFirstName) {
                            return true;
                        }
                        return console.log ('\n You must enter a first name for the role');
                    },
                },
                //last name
                {
                    type: 'input',
                    name: 'lastName',
                    message: `Enter in the employee's last name:`,
                    validate: addLastName => {
                        if (addLastName) {
                            return true;
                        }
                        return console.log ('\n You must enter a last name for the role');
                    },
                },
                //employee role
                { 
                    type: 'list',
                    name: 'role',
                    message: `What is the employee's role?`,
                    choices: roles,
                },
                //employee manager
                {
                    type: 'list',
                    name: 'manager',
                    message: `Who in the employee's manager?`,
                    choices: managers,
                },
            ])
            .then((output) => {
            howl.query(`INSERT INTO employee SET ?`,
                {
                    first_name: output.firstName,
                    last_name: output.lastName,
                    role_id: output.role,
                    manager_id: output.manager,
                },
                (err, res) => {
                    if (err) throw err;
                    console.log(`
        Successfully added ${output.firstName} ${output.lastName} to database!
        
    ================================================
                        `);
                toke(); 
                });
            });
        });
    });
}; 


//update employee role
function updateRole() {
    howl.query(`SELECT * FROM role;`, (err, res) => {
        if (err) throw err;
        let roles = res.map(role => ({name: role.title, value: role.id}));
        howl.query(`SELECT * FROM employee;`, (err, res) => {
            if (err) throw err;
            let employees = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id}));
            inquirer
            .prompt([
                 //employee
                {
                    type: 'list',
                    name: 'employee',
                    message: `Whose role needs to be updated?`,
                    choices: employees,
                },
                //role
                {
                    type: 'list',
                    name: 'role',
                    message: `What is the employee's new role?`,
                    choices: roles,
                },
            ])
            .then((output) => {
                howl.query(`UPDATE employee SET ? WHERE ?`,
                [
                    {
                        role_id: output.role,
                    },
                    {
                        id: output.employee,
                    },

                ],
                (err, res) => {
                    if (err) throw err;
                    console.log(`
        Successfully updated employee's role!
                    
    ================================================
                    `);
                toke(); 
                })
            })
        });
    });
};


//view employee by manager
function viewMng() {
    let query =
        `SELECT employee.id,
        employee.first_name,
        employee.last_name
        FROM employee
        ORDER BY employee.id ASC`; 
    howl.query(query, (err, res) => {
        if (err) throw err;
        let managers = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id}));
        inquirer
            .prompt({
                type: 'list',
                name: 'manager',
                message: `Which manager's employee list would you like to view?`,
                choices: managers,
            })
            .then((output) => {
                let sql =
                    `SELECT employee.id AS id,
                    employee.first_name AS 'first name',
                    employee.last_name AS 'last name',
                    role.title,
                    department.name AS 'department',
                    role.salary,
                    CONCAT(manager.first_name, ' ', manager.last_name) manager 
                    FROM employee
                    manager RIGHT JOIN employee ON employee.manager_id = manager.id 
                    JOIN role ON employee.role_id = role.id 
                    JOIN department ON department.id = role.department_id 
                    WHERE employee.manager_id = ${output.manager} 
                    ORDER BY employee.id ASC`
                howl.query(sql, (err, res) => {
                    if (err) throw err;
                    console.log(`
            viewing employee's managed by ${output.manager}:
 
    ================================================
                    `);
                    printTable(res);
                    console.log(`
    ================================================
                    `);
            toke();
            });
        });
    });
};



//update employee manager
function updateMng() {
    howl.query(`SELECT * FROM employee`, (err, res) => {
        if (err) throw err;
    let employees = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id}));
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employee',
                message: `Which employee needs an updated manager?`,
                choices: employees,
            },
            //manager
            {
                type: 'list',
                name: 'manager',
                message: `Choose a new manager for the employee:`,
                choices: employees,
            },
        ])
        .then((output) => {
            howl.query(`UPDATE employee SET ? WHERE?`,
            [
                {
                    manager_id: output.manager,
                },
                {
                    id: output.employee,
                },
            ],
            (err, res) => {
                if (err) throw err;
                console.log(`
        Successfully updated employee's manager!
        
    ================================================
                    `);
            toke();
            });
        });
    });
};



//delete
//department
function deleteDept() {
    let query =
        `SELECT * FROM department ORDER BY id ASC`;
    howl.query(query, (err, res) => {
        if (err) throw err;
    let departments = res.map(department => ({name: department.name, value: department.id}));
    inquirer
        .prompt({
            type: 'list',
            name: 'department',
            message: `Which department would you like to delete?`,
            choices: departments,
        })
        .then((output) => {
            let query =
                `DELETE FROM department WHERE ?`;
            howl.query(query,
                {
                   id: output.department,
                },
                (err, res) => {
                    if (err) throw err;
                    console.log(`
        Successfully deleted department from database!
        
    ================================================
                    `);
            toke(); 
            });
        });
    });
};

//role
function deleteRole() {
    let query =
        `SELECT * FROM role ORDER BY id ASC`;
    howl.query(query, (err, res) => {
        if (err) throw err;
    let roles = res.map(role => ({name: role.title, value: role.id}));
    inquirer
        .prompt({
            type: 'list',
            name: 'role',
            message: `Which role would you like to delete?`,
            choices: roles,
        })
        .then((output) => {
            let query =
                `DELETE FROM role WHERE ?`;
            howl.query(query,
                {
                    id: output.role,
                },
                (err, res) => {
                    if (err) throw err;
                    console.log(`
        Successfully deleted role from database!
            
    ================================================
                    `);
            toke();
            });
        });
    });
};

//delete employee
function deleteEmp() {
    let query =
        `SELECT * FROM employee ORDER BY id ASC`;
    howl.query(query, (err,res) => {
        if (err) throw err;
    let employees = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id}));
    inquirer
        .prompt({
            type: 'list',
            name: 'employee',
            message: `Which employee would you like to delete?`,
            choices: employees,
        })
        .then((output) => {
            let query =
                `DELETE FROM employee WHERE ?`;
            howl.query(query,
                {
                    id: output.employee,
                },
                (err, res) => {
                    if (err) throw err;
                    console.log(`
        Successfully deleted employee from database!
                        
    ================================================
                    `);
            toke();
            });
        });
    });
};


//view total utilized budget of a department
function viewBdgt() {
    let query = 
        `SELECT * FROM department ORDER BY id ASC;`;
    howl.query(query, (err, res) => {
        if (err) throw err;
    let departments = res.map(department => ({name: department.name, value: department.id}));
    inquirer
        .prompt({
            type: 'list',
            name: 'budget',
            message: `Which department's total utilized budget would you like to view?`,
            choices: departments,
        })
        .then((output) => {
            let sql = 
                `SELECT department_id AS id,
                SUM(salary) AS budget
                FROM role
                WHERE ?`;
            howl.query(sql,
                {
                    department_id: output.budget,
                },
                (err, res) => {
                    if (err) throw err;
                    console.log(`
        Successfully viewing ${output.budget}'s total utilized budget!
 
    ================================================
                    `);
                    printTable(res);
                    console.log(`
    ================================================
                    `);
            toke();
            });
        });
    });
};


// end
function end() {
    console.log(`

    get blazed!
        .===. (
        |   |  )
        |   | (
        |   | )
        |   \*/
      ,'    //.
     :~~~~~//~~;      
      '.  // .'
       ------- 
                                                   
                                                    christiecamp
    `);
};
