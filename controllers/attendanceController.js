const attendanceService = require("../services/attendanceService");

const createAttendance = async (req, res) => {
  try {
    const attendance = await attendanceService.createAttendance(req.body);
    res.status(201).json(attendance);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'assiduité", error });
  }
};

const getAllAttendances = async (req, res) => {
  try {
    const list = await attendanceService.getAllAttendances();
    res.status(200).json(list);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération des assiduités",
        error,
      });
  }
};

const getAttendanceById = async (req, res) => {
  try {
    const item = await attendanceService.getAttendanceById(req.params.id);
    if (!item)
      return res.status(404).json({ message: "Assiduité non trouvée" });
    res.status(200).json(item);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération de l'assiduité",
        error,
      });
  }
};

const updateAttendance = async (req, res) => {
  try {
    const updated = await attendanceService.updateAttendance(
      req.params.id,
      req.body
    );
    if (!updated)
      return res.status(404).json({ message: "Assiduité non trouvée" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour", error });
  }
};

const deleteAttendance = async (req, res) => {
  try {
    const deleted = await attendanceService.deleteAttendance(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Assiduité non trouvée" });
    res.status(200).json({ message: "Assiduité supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression", error });
  }
};

module.exports = {
  createAttendance,
  getAllAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
};
