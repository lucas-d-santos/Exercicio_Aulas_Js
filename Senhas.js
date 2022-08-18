let rs = require ('readline-sync');

let senha = rs.questionInt("Digite sua Senha: ");

if (senha === 9090){
    console.log ("Acesso Permitido!");
}else {
    console.log ("Acesso Negado!");
}