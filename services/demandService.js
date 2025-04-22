const Demand = require("../models/Demand");

const createDemand = async (data) => {
  const demand = new Demand(data);
  return await demand.save();
};

const getAllDemands = async () => {
  return await Demand.find().populate("employee").populate("createdBy");
};

const getDemandById = async (id) => {
  return await Demand.findById(id).populate("employee").populate("createdBy");
};

const updateDemand = async (id, data) => {
  return await Demand.findByIdAndUpdate(id, data, { new: true });
};

const deleteDemand = async (id) => {
  return await Demand.findByIdAndDelete(id);
};

module.exports = {
  createDemand,
  getAllDemands,
  getDemandById,
  updateDemand,
  deleteDemand,
};
