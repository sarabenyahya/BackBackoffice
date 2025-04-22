const Employee = require("../models/Employee");

const createEmployee = async (data) => {
  const employee = new Employee(data);
  try {
    await employee.save();
    return employee;
  } catch (error) {
    console.error(error);
  }
  await employee.save();
  return employee;
};

const getAllEmployees = async () => {
  return await Employee.find();
};

const getEmployeeById = async (id) => {
  return await Employee.findById(id);
};

const updateEmployee = async (id, data) => {
  return await Employee.findByIdAndUpdate(id, data, { new: true });
};

const deleteEmployee = async (id) => {
  return await Employee.findByIdAndDelete(id);
};
module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
