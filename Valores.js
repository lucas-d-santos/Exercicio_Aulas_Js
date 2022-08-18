const rs = require ('readline-sync');

let arrayNumeros = [];
let contador = 0;

while (contador < 4) {
    let numeroExistente = false;
    let numero = rs.questionInt("\n Digite um Numero: ");
    if (contador === 0) {
        arrayNumeros.push(numero);
        contador++;
    } else {
        for (i = 0; i < arrayNumeros.length; i++) {
            if (arrayNumeros[i] === numero) {
                console.log ("\n O Valor ja existe \n ");
                numeroExistente = true;
                break;
            }
        }
    }

        if (numeroExistente == false) {
            arrayNumeros.push (numero);
            contador++;
    }
}
