const contractSchema = new Schema({
  employeeId: {
    type: String,
    ref: "Employee",
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
  fileName: {
    name: String,
    url: String,
    path: String,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Contract", contractSchema);
