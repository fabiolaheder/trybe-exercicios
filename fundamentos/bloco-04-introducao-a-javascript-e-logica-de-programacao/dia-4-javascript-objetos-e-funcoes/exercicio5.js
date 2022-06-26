let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};


let resultado = [];

for (let key in info){
  resultado.push(info[key] + ' ' + 'e' +  ' ' + info2[key]);
};


for (index = 0; index < resultado.length; index += 1)
if (resultado[index] === 'Sim e Sim'){
  resultado[index] = 'Ambos recorrentes'
}

console.log(resultado);