const produit = {
    nom: "clavier mecanique",
    prix: 450,
    stock: 12,
    categorie: "informatique",
    enPromotion: false
};

function estDisponible(produit) {
    return produit.stock > 0;
}

console.log(`${produit.nom} - ${produit.prix} dh - ${produit.stock} en stock - (${produit.categorie})`);
produit.prix = Math.round(produit.prix *1.1);
console.log(`Nouveau prix: ${produit.prix}`);
for(const key in produit)
{
    console.log(`${key}: ${produit[key]}`)
}

console.log(`estDisponible (produit) -> ${estDisponible(produit)}`)