/**
 * zorg ervoor dat je onderstaande zaken kan verwezelijken met deze API:
 *
 * 1. Van 1 kind alle info verkrijgen. X
 * 2. Van 1 kind alle info + de id en naam van de geschenkjes X
 * 3. Kinderen toevoegen aan te lijst X
 * 4. Geschenken kan toevoegen aan het lijstje van een kind X 
 * 5. Geschenken kan wissen van de lijst van een kind  X
 *
 * succes!!
 */

const { sinterklaasGeschenken: geschenken } = require("../databank/data");
const { kindjes: kindjes } = require("../databank/data");

const kindInfo = (req, res) => {

  res.json({
    status: "gelukt",
    data: kindjes.filter((item) => item.id == req.params.ID),
  });
};

const kindInfoGeschenk = (req,res)=>{
    const data = kindjes.find((item)=> item.id == req.params.ID)
    const fulKind = {
        id : data.id,
        voornaam : data.voornaam,
        achternaam: data.achternaam,
        geschenkId : data.geschenkId.map(geschenkId => {
          return geschenken.find((g) => g.id === geschenkId);
        })
    }
    res.json({status : "gelukt", fulKind})
}
const kindToevoegen = (req,res)=>{
 const newkind = {
    id: newID(kindjes),
    voornaam: req.body.voornaam,
    achternaam: req.body.achternaam,
    geschenkId: req.body.geschenkId,
  };
  kindjes.push(newkind);
  res.json(newkind);
}

const updateGeschenk = (req,res)=>{
    const kind = kindjes.find((item) => item.id == req.params.ID)

    if (req.body.geschenkId) {
    kind.geschenkId.push(req.body.geschenkId);
  }
  res.json({
    status:"gelukt",kind
  })
}
const deleteGeschenk = (req,res)=>{
     const kind = kindjes.find((item) => item.id == req.params.ID)

    if (req.body.geschenkId) {
    kind.geschenkId.forEach((g)=>{
       if (g == req.body.geschenkId){
        kind.geschenkId.splice(kind.geschenkId.indexOf(g),1)
       }
    })
  }
  res.json({
    status:"gelukt",kind
  })
}

const newID = (lijstMetID) => {
  lijstMetID.forEach((item) => {
    maxID = 0;
    item.id > maxID ? (maxID = item.id) : (maxID = maxID);
  });
  return maxID + 1;
};
module.exports = {
 kindInfo,
 kindInfoGeschenk,
 kindToevoegen,
 updateGeschenk,
 deleteGeschenk,
};
