const departmentService = require("../services/departmentService");

const createDepartment = async (req, res) => {
  try {
    const newDepartment = await departmentService.createDepartment(req.body);
    res.status(201).json(newDepartment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création du département", error });
  }
};

const getDepartments = async (req, res) => {
  try {
    const departments = await departmentService.getAllDepartments();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des départements",
      error,
    });
  }
};

const getDepartmentById = async (req, res) => {
  try {
    const department = await departmentService.getDepartmentById(req.params.id);
    if (!department)
      return res.status(404).json({ message: "Département non trouvé" });
    res.status(200).json(department);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur récupération du département", error });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const updated = await departmentService.updateDepartment(
      req.params.id,
      req.body
    );
    if (!updated)
      return res.status(404).json({ message: "Département non trouvé" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Erreur modification département", error });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const deleted = await departmentService.deleteDepartment(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Département non trouvé" });
    res.status(200).json({ message: "Département supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur suppression département", error });
  }
};
module.exports = {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
