const demandSchema = new Schema({
  employeeId: {
    type: String,
    ref: "Employee",
    required: true,
  },
  type: {
    type: String,
    enum: ["Congé", "Maladie", "Autre"],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  requestedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Demand", demandSchema);
