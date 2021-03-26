/* O método map() invoca a função callback passada por argumento para cada elemento 
do Array e devolve um novo Array como resultado. */

// Sintaxe
// arr.map(callback[, thisArg])

// Parâmetros
/*
callback: Função cujo retorno produz o elemento do novo Array. Recebe três argumentos:
valorAtual: O valor do elemento original do Array de origem. 
indice: O índice do elemento atual que está sendo processado no array.
array: O Array de origem.
thisArg: Opcional. Valor a ser utilizado como o this no momento da execução da 
função callback. 
*/

/* O código a seguir mostrar como o método map funciona quando a função callback 
possui apenas um argumento. Esse argumento será automaticamente atribuído para 
cada elemento do array conforme o map itera sobre o array original. */
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]

//Dobrando números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
const numerosDobrado = numeros.map(function(valor){
    return valor * 2;
});
console.log(numerosDobrado);

// Exemplo usando objeto.
const pessoas = [ {nome: 'Roberto', idade: 22},
{nome: 'Teste', idade: 25},
{nome: 'Fulano', idade: 26},
{nome: 'Citrano', idade: 27},
{nome: 'Deltrano', idade: 28}];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => obj.idade);

const comIds = pessoas.map(function(obj, indice){
    const newObj = { ...obj };
    newObj.id = indice;
    return indice;
});

console.log(comIds)

