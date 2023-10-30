const pool = require('./db');

// Department queries
async function getAllDepartments() {
  try {
    const [rows] = await pool.execute('SELECT * FROM department');
    return rows;
  } catch (error) {
    console.error('Error fetching departments:', error.message);
    throw error;
  }
}

async function deleteDepartment(departmentId) {
  try {
    await pool.execute('DELETE FROM department WHERE id = ?', [departmentId]);
  } catch (error) {
    console.error('Error deleting department:', error.message);
    throw error;
  }
}

// Role queries
async function getAllRoles() {
  try {
    const [rows] = await pool.execute('SELECT * FROM role');
    return rows;
  } catch (error) {
    console.error('Error fetching roles:', error.message);
    throw error;
  }
}

async function addRole({ title, salary, departmentId }) {
  try {
    await pool.execute('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
  } catch (error) {
    console.error('Error adding role:', error.message);
    throw error;
  }
}

// Employee queries
async function getAllEmployees() {
  try {
    const [rows] = await pool.execute('SELECT * FROM employee');
    return rows;
  } catch (error) {
    console.error('Error fetching employees:', error.message);
    throw error;
  }
}

async function addEmployee({ firstName, lastName, roleId, managerId }) {
  try {
    await pool.execute('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
  } catch (error) {
    console.error('Error adding employee:', error.message);
    throw error;
  }
}
module.exports = {
  getAllDepartments,
  deleteDepartment,
  getAllRoles,
  addRole,
  getAllEmployees,
  addEmployee,
};