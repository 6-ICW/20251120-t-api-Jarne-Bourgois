const express = require("express");
const ctrlGeschenk = require("../controllers/geschenken");

// maak router object aan
const routes = express.Router();

// maak de verschillende routs aan

routes.get("/", ctrlGeschenk.lijstGeschenken);
routes.get("/:ID", ctrlGeschenk.geschenkInfo);
routes.post("/", ctrlGeschenk.geschenkToevoegen);
routes.delete("/:ID", ctrlGeschenk.geschenkWissen);

// exporteer het router object
module.exports = routes;
