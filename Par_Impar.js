let rs = require('readline-sync');

let num = rs.questionInt("Digite Qualquer Numero inteiro: ");

if (num % 2 === 0){
    console.log("Seu Número", num, "é Par");
}else {
    console.log("Seu Número", num, "é Ímpar");
}