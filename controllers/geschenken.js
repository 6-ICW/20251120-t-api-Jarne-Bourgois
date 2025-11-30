/**
 * zorg ervoor dat je onderstaande functies werken
 *
 * 1. Zorg dat je een lijst van alle geschenken kan krijgen (enkel de id en de naam). X
 * 2. Zorg dat je op basis van een verkregen ID de details van een geschenk kan teruggeven X
 * 3. Zorg ervoor dat via postman nieuwe (andere zaken dan onderstaand) kan toevoegen aan de lijst van
 * geschenken. X
 * 4. Zorg ervoor dat een geschenk enkel gewist kan worden als het in geen enkel lijstje staat. X
 *
 * succes!!
 */

// connecteer de datagegevens aan de controller
const { sinterklaasGeschenken: geschenken } = require("../databank/data");
const { kindjes: kindjes } = require("../databank/data");

const lijstGeschenken = (req, res) => {
  res.json(
    geschenken.map((cadeau) => ({
      id: cadeau.id,
      naam: cadeau.naam,
    }))
  );
};

const geschenkInfo = (req, res) => {

  res.json({
    status: "gelukt",
    data: geschenken.filter((cadeau) => cadeau.id == req.params.ID),
  });
};

const geschenkToevoegen = (req, res) => {
  const newGeschenk = {
    id: newID(geschenken),
    naam: req.body.naam,
    categorie: req.body.categorie,
    prijs: req.body.prijs,
  };
  geschenken.push(newGeschenk);
  res.json(newGeschenk);
};

const geschenkWissen = (req, res) => {
  const geschenkToDel = geschenken.find(
    (geschenk) => geschenk.id == req.params.ID
  );
  let statusgeschenk = "gelukt"
  let verwijder = true
  const indexToDel = geschenken.indexOf(geschenkToDel);
  kindjes.forEach((item)=>{
    item.geschenkId.forEach((id)=>{
      if (id == geschenkToDel.id){
        statusgeschenk = "fail het geschenk is gevraagd"
        verwijder = false
      }
    })
  })
  if(verwijder == true){
    console.log("dit is verwijdert")
    geschenken.splice(indexToDel, 1);
  }
 
  res.json({ resultaat: statusgeschenk });
};

const newID = (lijstMetID) => {
  lijstMetID.forEach((item) => {
    maxID = 0;
    item.id > maxID ? (maxID = item.id) : (maxID = maxID);
  });
  return maxID + 1;
};

module.exports = {
  lijstGeschenken,
  geschenkInfo,
  geschenkToevoegen,
  geschenkWissen,
};
