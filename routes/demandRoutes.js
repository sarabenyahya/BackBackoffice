const express = require("express");
const router = express.Router();
const demandController = require("../controllers/demandController");

router.post("/", demandController.createDemand);
router.get("/", demandController.getAllDemands);
router.get("/:id", demandController.getDemandById);
router.put("/:id", demandController.updateDemand);
router.delete("/:id", demandController.deleteDemand);

module.exports = router;
