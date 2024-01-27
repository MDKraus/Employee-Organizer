const inquirer = require('inquirer');
const { getAllDepartments, getAllRoles, getAllEmployees } = require('./queries');

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
    
    case 'View all roles':
      const roles = await getAllRoles();
      console.table(roles);
      break;
    
    case 'View all employees':
      const employees = await getAllEmployees();
      console.table(employees);
      break;

    default:
      console.log('Invalid action:', action);
      break;
  }
}

// Call the function to start the application
startApp();
