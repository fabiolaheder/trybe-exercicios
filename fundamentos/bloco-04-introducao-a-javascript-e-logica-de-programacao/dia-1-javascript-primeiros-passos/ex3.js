const num1 = 1;
const num2 = 2;
const num3 = 3;

let maiorNumero;
let primeiroComparador;

if (num1 > num2){
   primeiroComparador = num1;
}else{
   primeiroComparador = num2;
}

if (primeiroComparador > num3){
    maiorNumero = primeiroComparador;
}else{
    maiorNumero = num3;
}
console.log(maiorNumero);