const rs = require ('readline-sync');

const quantiaMaças = rs.questionInt ("Digite a quantidade de Maca: ");

const varejo = 0.30;
const atacado = 0.25;

if (quantiaMaças >12){
    const totalAtacado = quantiaMaças*atacado;
    console.log ("Total acima de 12 promoção saiu por : " + totalAtacado, "reais");
} else {
    const totalVarejo = quantiaMaças*varejo;
    console.log ("Total da Compra é de " + totalVarejo, "reais");
}