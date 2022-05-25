//  importanto o modulo quadrado.js
console.log ("-- QUADRADO --");
const { area, perimetro } = require("./quadrado");  //  forma mais comum de utilizar
const quadrado = require("./quadrado");

//  passamos ara uma variável o valor da funcão
var areaDoQuadrado = quadrado.area (23);
var areaDoQuadrado2 = area (23);
var perimetoDoQuadrado = perimetro (23);

// LOG's
console.log("Jeito 1: " + areaDoQuadrado + " | Jeito 2: " + areaDoQuadrado2);
console.log("Perímetro: " + perimetoDoQuadrado);


// Usando o modulo do arquivo calculadora
console.log ("-- CALCULADORA --");
const calc = require("./calculadora");

var soma = calc.somar (10, 5);
console.log ("Resultado da soma: " + soma);

var divisao = calc.dividir (10, 5);
console.log ("Resultado da divisão: " + divisao);

var subtracao = calc.subtrair (10, 5);
console.log ("Resultado da subtração: " + subtracao);

var multiplicacao = calc.multiplicar (10, 5);
console.log ("Resultado multiplicação: " + multiplicacao);