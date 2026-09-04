const courses = ["pain", "lait", "riz", "cafe"];

courses.push('sucre');
// console.log(courses);

const indexLait = courses.indexOf('lait');
// console.log(indexLait);

courses.splice(indexLait,1)
// console.log(courses);

console.log("Nombre d'articles : " , courses.length);

// courses.forEach((item, index)=>{
//     console.log(`${index +1}. ${item}`);
// })

let number = 0;
for (let i = 0; i < courses.length; i++) {
    let item = courses[i];
    number ++
console.log(`${number}. ${item}`);

}

for (let i = 0; i < courses.length; i++) {
    if (courses[i] === "cafe") {
        console.log("le cafe est bien dans la list");     
    }
}

