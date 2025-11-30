const sinterklaasGeschenken = [
  { id: 1, naam: "Chocoladeletter", categorie: "Snoep", prijs: 2.5 },
  { id: 2, naam: "Pepernoten", categorie: "Snoep", prijs: 1.95 },
  { id: 3, naam: "Speelgoedauto", categorie: "Speelgoed", prijs: 9.99 },
  { id: 4, naam: "Knuffelbeer", categorie: "Speelgoed", prijs: 14.5 },
  { id: 5, naam: "Puzzel 1000 stukjes", categorie: "Spelletjes", prijs: 12.0 },
  { id: 6, naam: "Tekenboek", categorie: "Creatief", prijs: 3.5 },
  { id: 7, naam: "Kleurpotloden", categorie: "Creatief", prijs: 2.99 },
  { id: 8, naam: "Gezelschapsspel", categorie: "Spelletjes", prijs: 19.95 },
  { id: 9, naam: "Sinterklaasboek", categorie: "Boek", prijs: 7.99 },
  { id: 10, naam: "LEGO set", categorie: "Speelgoed", prijs: 24.99 },
  {
    id: 11,
    naam: "Sokken met Sinterklaasprint",
    categorie: "Kleding",
    prijs: 4.5,
  },
  { id: 12, naam: "Smarties", categorie: "Snoep", prijs: 1.2 },
];

const kindjes = [
  { id: 1, voornaam: "Emma", achternaam: "Jansen", geschenkId: [1, 4] },
  { id: 2, voornaam: "Liam", achternaam: "De Vries", geschenkId: [3, 5, 10] },
  { id: 3, voornaam: "Sofie", achternaam: "Bakker", geschenkId: [9, 12] },
  { id: 4, voornaam: "Noah", achternaam: "Visser", geschenkId: [ 4, 11] },
  { id: 5, voornaam: "Mila", achternaam: "Mulder", geschenkId: [8] },
];

module.exports = {
  sinterklaasGeschenken,
  kindjes,
};
