const express = require("express");
const ctrlKind = require("../controllers/kinderen");

// maak router object aan
const routes = express.Router();

// maak de verschillende routs aan

routes.get("/:ID", ctrlKind.kindInfo);
routes.get("/kindInfo/:ID", ctrlKind.kindInfoGeschenk);
routes.post("/", ctrlKind.kindToevoegen);
routes.put("/:ID", ctrlKind.updateGeschenk);
routes.delete("/:ID", ctrlKind.deleteGeschenk);

// exporteer het router object
module.exports = routes;
