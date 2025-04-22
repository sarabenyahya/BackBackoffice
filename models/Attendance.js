const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  employeeId: {
    type: String,
    ref: "Employee",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
