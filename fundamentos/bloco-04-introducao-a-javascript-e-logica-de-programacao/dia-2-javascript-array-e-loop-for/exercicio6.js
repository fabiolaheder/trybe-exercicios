let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let count = 0;
for(let index = 0; index < numbers.length; index +=1){
    if (numbers[index] % 2 > 0){
        count += 1;
    }
}
    

if (count === 0){
    console.log("nenhum valor ímpar encontrado");
}else if(count > 1){
    console.log(count + " " + "valores impares encontrados");
}else{
    console.log(count + " " + "valor impar encontrado")
}