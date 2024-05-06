// Exercicio 6

// Dada a idade e o tipo de ingresso de uma pessoa, determine se ela pode assistir a um filme com classificação etária. A pessoa pode assistir ao filme se:

// Tiver 18 anos ou mais, ou Tiver 16 ou 17 anos e possuir um ingresso do tipo "Meia".

let idade = 16;
let tipoIngresso = "Meia";

if (idade >= 18 || (idade >= 16 && tipoIngresso === "Meia")) {
    console.log("Pode assistir ao filme.");
} else {
    console.log("Não pode assistir ao filme.");
}
