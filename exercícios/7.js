//Exercicio 7

// Escreva um programa que receba um número inteiro representando a operação a ser realizada:

// 1: Adicionar um elemento no final do array.
// 2: Remover o último elemento do array.
// 3: Remover o primeiro elemento do array.
// 4: Exibir todos os elementos do array.
// 0: Sair do programa.

let array = [];

function addElement(number) {
    array.push(number);
}

function removeLastElement() {
    array.pop();
}

function removeFirstElement() {
    array.shift();
}

addElement(1);
addElement(2);
addElement(3);
addElement(4);
removeLastElement();
removeFirstElement();

console.log(array);