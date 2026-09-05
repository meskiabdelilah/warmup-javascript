const commandes = [
 { montant: 150, statut: "standard" },
 { montant: 620, statut: "standard" },
 { montant: 1200, statut: "premium" }
];

function calculerCommande(montant, statut)
{
    let pourcentageRemise = 0 ;

    if (montant >= 1000 ) {
        pourcentageRemise = 15
    }
    else if (montant < 1000 && montant >=500) {
        pourcentageRemise =10
    }
    else if (montant < 500 && montant >=200){
        pourcentageRemise =5
    }
    if (statut === 'premium') {
        pourcentageRemise += 5
    }

    pourcentageRemise = Math.min(pourcentageRemise, 20);


    const remise = montant * (pourcentageRemise / 100);
    const totalApresRemise = montant - remise
    const livraison = totalApresRemise >= 300 ? 0 : 30;
    const totalAPayer = totalApresRemise + livraison

    return {
        pourcentageRemise: pourcentageRemise,
        remise: remise,
        totalApresRemise:totalApresRemise,
        livraison: livraison,
        totalAPayer: totalAPayer
    }
}


console.log(calculerCommande(1200, 'premium'));

