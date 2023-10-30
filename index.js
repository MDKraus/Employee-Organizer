const inquirer = require('inquirer');
const { getAllDepartments } = require('./queries');

async function startApp() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
      ],
    },
  ]);

  switch (action) {
    case 'View all departments':
      const departments = await getAllDepartments();
      console.table(departments);
      break;
  }
}

// Call the function to start the application
startApp();
