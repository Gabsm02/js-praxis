//Exercicio 8

// Escreva um programa que receba uma operação matemática e dois operandos:

// "soma": Adicionar os dois operandos.
// "subtração": Subtrair o segundo operando do primeiro.
// "multiplicação": Multiplicar os dois operandos.
// "divisão": Dividir o primeiro operando pelo segundo.

let numero1 = 10;
let numero2 = 5;
let operacao = "subtração";

if (operacao === "soma") {
    console.log(numero1 + numero2);
} else if (operacao === "subtração") {
    console.log(numero1 - numero2);
} else if (operacao === "multiplicação") {
    console.log(numero1 * numero2);
} else if (operacao === "divisão") {
    console.log(numero1 / numero2);
} else {
    console.log("Operação inválida");
}
