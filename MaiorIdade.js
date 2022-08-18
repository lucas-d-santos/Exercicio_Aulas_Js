let rs = require ('readline-sync');

let AnoDeNascimento = rs.questionInt("Digite o ano que voce Nasceu. ");

let ano = 2020

if (ano - AnoDeNascimento >= 16){
    console.log ("Você poderá votar esse ano!")
}else {console.log("Você não pode votar ainda!")}