const employeeService = require("../services/employeeService");

const createEmployee = async (req, res) => {
  try {
    const newEmployee = await employeeService.createEmployee(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'employé", error });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des employés", error });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    if (!employee)
      return res.status(404).json({ message: "Employé non trouvé" });
    res.status(200).json(employee);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de l'employé", error });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const updated = await employeeService.updateEmployee(
      req.params.id,
      req.body
    );
    if (!updated)
      return res.status(404).json({ message: "Employé non trouvé" });
    res.status(200).json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'employé", error });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const deleted = await employeeService.deleteEmployee(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Employé non trouvé" });
    res.status(200).json({ message: "Employé supprimé avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'employé", error });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
