const express = require("express");
const connectDB = require("./conf/db");
require("dotenv").config();
const cors = require("cors");
const server = express();

const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const userRoutes = require("./routes/userRoutes");
const contractRoutes = require("./routes/contractRoutes");
const demandRoutes = require("./routes/demandRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const authRoutes = require("./routes/authRoutes");
const session = require("express-session");

server.use(express.json());
server.use(cors());

server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie: {
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production

      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

connectDB();

server.use("/api/employees", employeeRoutes);
server.use("/api/departments", departmentRoutes);
server.use("/api/users", userRoutes);
server.use("/api/contracts", contractRoutes);
server.use("/api/demands", demandRoutes);
server.use("/api/attendances", attendanceRoutes);
server.use("/api/auth", authRoutes);

server.get("/", (req, res) => {
  res.send("backend du backoffice");
});

const PORT = process.env.PORT || 6000;
server.listen(PORT, () => {
  console.log(`✅ le serveur est démarré sur http://localhost:${PORT}`);
});
