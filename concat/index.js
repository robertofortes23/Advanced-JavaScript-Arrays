/* arr.concat(valor1, valor2, ..., valorN)
concat cria um novo array unindo todos os elementos que foram passados como parâmetro,
na ordem dada, para cada argumento e seus elementos (se o elemento passado for um array). */

//Exemplo: Concatenando dois arrays ---------
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

// creates array ["a", "b", "c", 1, 2, 3]; alpha and numeric are unchanged
const alphaNumeric = alpha.concat(numeric);

//Exemplo: Concatenando três arrays ---------
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

// creates array [1, 2, 3, 4, 5, 6, 7, 8, 9]; num1, num2, num3 are unchanged
const nums = num1.concat(num2, num3);


//Exemplo: Concatenando valores ao array ---------
var alpha = ['a', 'b', 'c'];

// creates array ["a", "b", "c", 1, 2, 3], leaving alpha unchanged
var alphaNumeric = alpha.concat(1, [2, 3]);