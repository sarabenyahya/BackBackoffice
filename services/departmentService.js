const Department = require("../models/Department");

const createDepartment = async (data) => {
  const department = new Department(data);
  return await department.save();
};

const getAllDepartments = async () => {
  return await Department.find();
};

const getDepartmentById = async (id) => {
  return await Department.findById(id);
};

const updateDepartment = async (id, data) => {
  return await Department.findByIdAndUpdate(id, data, { new: true });
};

const deleteDepartment = async (id) => {
  return await Department.findByIdAndDelete(id);
};

module.exports = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
