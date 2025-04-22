const Attendance = require("../models/Attendance");

const createAttendance = async (data) => {
  const attendance = new Attendance(data);
  return await attendance.save();
};

const getAllAttendances = async () => {
  return await Attendance.find().populate("employee").populate("createdBy");
};

const getAttendanceById = async (id) => {
  return await Attendance.findById(id)
    .populate("employee")
    .populate("createdBy");
};

const updateAttendance = async (id, data) => {
  return await Attendance.findByIdAndUpdate(id, data, { new: true });
};

const deleteAttendance = async (id) => {
  return await Attendance.findByIdAndDelete(id);
};

module.exports = {
  createAttendance,
  getAllAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
};
