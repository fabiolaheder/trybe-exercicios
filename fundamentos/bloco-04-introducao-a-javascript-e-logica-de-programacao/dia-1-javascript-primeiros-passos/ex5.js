const angulo1 = 80;
const angulo2 = 50;
const angulo3 = 50;

let triangulo = angulo1 + angulo2 + angulo3;
let trueOrFalse;

if (triangulo === 180){
    trueOrFalse = true;
}else{
    trueOrFalse = false;
}

if (trueOrFalse === false){
    console.log("erro: triangulo invalido");
}

