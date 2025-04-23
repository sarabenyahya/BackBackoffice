const Contract = require("../models/Contract");

const createContract = async (data) => {
  const contract = new Contract(data);
  return await contract.save();
};

const getAllContracts = async () => {
  return await Contract.find().populate("employee").populate("createdBy");
};

const getContractById = async (id) => {
  return await Contract.findById(id).populate("employee").populate("createdBy");
};

const updateContract = async (id, data) => {
  return await Contract.findByIdAndUpdate(id, data, { new: true });
};

const deleteContract = async (id) => {
  return await Contract.findByIdAndDelete(id);
};

module.exports = {
  createContract,
  getAllContracts,
  getContractById,
  updateContract,
  deleteContract,
};
