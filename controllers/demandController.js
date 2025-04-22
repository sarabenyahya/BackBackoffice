const demandService = require("../services/demandService");

const createDemand = async (req, res) => {
  try {
    const demand = await demandService.createDemand(req.body);
    res.status(201).json(demand);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de la demande", error });
  }
};

const getAllDemands = async (req, res) => {
  try {
    const demands = await demandService.getAllDemands();
    res.status(200).json(demands);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des demandes", error });
  }
};

const getDemandById = async (req, res) => {
  try {
    const demand = await demandService.getDemandById(req.params.id);
    if (!demand)
      return res.status(404).json({ message: "Demande non trouvée" });
    res.status(200).json(demand);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de la demande", error });
  }
};

const updateDemand = async (req, res) => {
  try {
    const updated = await demandService.updateDemand(req.params.id, req.body);
    if (!updated)
      return res.status(404).json({ message: "Demande non trouvée" });
    res.status(200).json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de la demande", error });
  }
};

const deleteDemand = async (req, res) => {
  try {
    const deleted = await demandService.deleteDemand(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Demande non trouvée" });
    res.status(200).json({ message: "Demande supprimée avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de la demande", error });
  }
};

module.exports = {
  createDemand,
  getAllDemands,
  getDemandById,
  updateDemand,
  deleteDemand,
};
