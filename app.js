const express = require("express");
const connectDB = require("./conf/db");
require("dotenv").config();
const server = express();

connectDB();

server.get("/", (req, res) => {
  res.send("backend du backoffice");
});

const PORT = process.env.PORT || 6000;
server.listen(PORT, () => {
  console.log(`✅ le serveur est démarré sur http://localhost:${PORT}`);
});
