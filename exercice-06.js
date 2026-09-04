const panier = [
 { nom: "Souris", prix: 150, quantite: 2 },
 { nom: "Casque", prix: 400, quantite: 1 },
 { nom: "Tapis", prix: 60, quantite: 3 },
 { nom: "Webcam", prix: 520, quantite: 1 }
];

const noms = panier.map(item => item.nom);
console.log("Nom : " , noms);

const totauxLignes = panier.map(item => {
    return {
        nom: item.nom,
        total: item.prix * item.quantite
    };
});

const totauxFormat = totauxLignes.map(item => `${item.nom} ${item.total}`).join(", ");
console.log(`Totaux lignes : ${totauxFormat}`);

const prixSuperieur100 = panier
  .filter(item => item.prix > 100)
  .map(item => item.nom);
console.log("Prix > 100 :", prixSuperieur100);

const totalPanier = panier.reduce((acc, item) => acc + (item.prix * item.quantite), 0);
console.log(`Total panier : ${totalPanier} DH`);

const nombreTotalArticles = panier.reduce((acc, item) => acc + item.quantite, 0);
console.log(`Nombre d'articles : ${nombreTotalArticles}`);
