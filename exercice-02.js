const temperatures = [-5, 10, 22, 34];

function celsiusVersFahrenheit(celsius)
{   
    return celsius*9/5+32;   

}
console.log(`celsiusVersFahrenheit(22) : ${celsiusVersFahrenheit(22)}
celsiusVersFahrenheit(-5) : ${celsiusVersFahrenheit(-5)}`);

function decrireTemperature(celsius){

    if(celsius < 10) 
        return "Froid";
    if(celsius >=10 && celsius <= 25)
        return "Doux" ;
    return "Chaud"

}  
 
// console.log(` decrireTemperature(-5) -> ${decrireTemperature(-5)}`);
// console.log(`decrireTemperature(10) -> ${decrireTemperature(10)}`);
// console.log(` decrireTemperature(22) -> ${decrireTemperature(22)}`);
// console.log(` decrireTemperature(34) -> ${decrireTemperature(34)}`);


temperatures.forEach((temp) => {
    console.log(` decrireTemperature(${temp}) -> ${decrireTemperature(temp)}`);
})




