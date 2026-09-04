const titre = " Mon Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";

function genererSlug(titre){
  return titre.trim()
              .replace(/ +/g, ' ')
              .toLocaleLowerCase()
              .replaceAll(' ', '-')
}

console.log(`genererSlug(titre) -> "${genererSlug(titre)}"`);

function compterMots(phrase)
{
    return phrase.trim()
                 .toLocaleLowerCase()
                 .replace(/ +/g, ' ')
                 .split(' ')
                 .length;
}

console.log(`compterMots(phrase) -> ${compterMots(phrase)}`);


function initiales(nomComplet) 
{
    return  nomComplet.trim()
                      .toLocaleUpperCase()
                      .split(' ')
                      .map(word =>word[0])
                      .join('.') + '.'
}

console.log(`initiales(nomComplet) -> "${initiales(nomComplet)}"`);
