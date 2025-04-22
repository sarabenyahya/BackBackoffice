const contractService = require("../services/contractService");

const createContract = async (req, res) => {
  try {
    const contract = await contractService.createContract(req.body);
    res.status(201).json(contract);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création du contrat", error });
  }
};

const getAllContracts = async (req, res) => {
  try {
    const contracts = await contractService.getAllContracts();
    res.status(200).json(contracts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des contrats", error });
  }
};

const getContractById = async (req, res) => {
  try {
    const contract = await contractService.getContractById(req.params.id);
    if (!contract)
      return res.status(404).json({ message: "Contrat non trouvé" });
    res.status(200).json(contract);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération du contrat", error });
  }
};

const updateContract = async (req, res) => {
  try {
    const updated = await contractService.updateContract(
      req.params.id,
      req.body
    );
    if (!updated)
      return res.status(404).json({ message: "Contrat non trouvé" });
    res.status(200).json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour du contrat", error });
  }
};

const deleteContract = async (req, res) => {
  try {
    const deleted = await contractService.deleteContract(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Contrat non trouvé" });
    res.status(200).json({ message: "Contrat supprimé avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du contrat", error });
  }
};

module.exports = {
  createContract,
  getAllContracts,
  getContractById,
  updateContract,
  deleteContract,
};
