//user input

const input = [
    //first prompt - may need to reorganize
    {
        type: 'list',
        name: 'option',
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
    },

    //add department
    {
        type: 'input',
        name: 'addDept',
        message: 'What is the name for the department?',
        validate: (output) => {
            if (output.addDept) {
                return true;
            }
            return console.log ('\n You must enter a department name');
        }
    },


    // add role
    //role
    {
        type: 'input',
        name: 'title',
        message: 'What is the name for the role?',
    },
    //add salary to role
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this role?',
    },
    //add department to role
    {
        type: 'input',
        name: 'department',
        message: 'Which department is this role in?',
        choices: departments,
    },


    
    //add employee
    //first name
    {
        type: 'input',
        name: 'firstName',
        message: `Enter in the employee's first name:`
    },
    //last name
    {
        type: 'input',
        name: 'lastName',
        message: `Enter in the employee's last name:`
    },
    //employee role
    {
        type: 'list',
        name: 'role',
        message: `What is the employee's role?`,
        choices: roles //create a variable
    },
    //employee manager
    {
        type: 'list',
        name: 'manager',
        message: `Who in the employee's manager?`,
        choices: managers //create a variable (include null - if new ceo)
    },

    //update employee role
    //employee
    {
        type: 'list',
        name: 'employee',
        message: `Whose role needs to be updated?`,
        choices: employees //create a variable
    },
    //role
    {
        type: 'list',
        name: 'role',
        message: `What is the employee's new role?`,
        choices: roles //create a variable
    },



    //view employee by manager
    {
        type: 'list',
        name: 'manager',
        message: `View employee by manager:`,
        choices: managers //create a variable
    },




    //update employee manager
    //employee
    {
        type: 'list',
        name: 'employee',
        message: `Which employee needs an updated manager?`,
        choices: managers //create a variable
    },
    //manager
    {
        type: 'list',
        name: 'manager',
        message: `Choose a new manager for the employee:`,
        choices: managers //create a variable
    },


    //delete department
    {
        type: 'list',
        name: 'department',
        message: `Which department would you like to delete?`,
        choices: departments,
    },
    //delete role
    {
        type: 'list',
        name: 'role',
        message: `Which role would you like to delete?`,
        choices: roles,
    },

    //delete employee
    {
        type: 'list',
        name: 'employee',
        message: `Which employee would you like to delete?`,
        choices: employees //create a variable
    },
];

module.exports = input;