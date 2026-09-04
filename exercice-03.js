let compteFor = "";
for (let i = 10; i >= 1; i--) {
  compteFor += i + " ";
}
console.log(compteFor.trim());
console.log("Decollage !");

let somme = 0;
for (let i = 1; i <= 100; i++) {
  somme += i;
}
console.log(`Somme de 1 a 100 : ${somme}`);

let pairs = "";
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pairs += i + " ";
  }
}
console.log(`Nombres pairs : ${pairs}`);

let count = 10;
let compteWhile = "";
while (count >= 1) {
  compteWhile += count + " ";
  count--;
}
console.log(compteWhile);