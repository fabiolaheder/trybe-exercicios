let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



let soma = 0;
let count = 0;

for (let index = 0; index < numbers.length; index +=1){
    soma += numbers[index];
    count += 1 ;
}

let mediaAritmetrica = soma / count 
console.log(mediaAritmetrica);

if (mediaAritmetrica >= 20){
    console.log("Maior que 20!");
}