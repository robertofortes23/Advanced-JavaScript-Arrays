
const nomes = ['Roberto', 'Maria', 'Fulano', 'Teste']
//nomes.splice(indice, delete, elem1, elem2, elem3)

const removidos = nomes.splice(0, 2);
console.log(nomes, removidos) // ['Fulano', 'Teste'] [ 'Roberto', 'Maria']

/////////

const myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
const removed = myFish.splice(2, 0, "drum");
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido

//remove 2 elementos a partir do indice 3
removed = myFish.splice(3, Number.MAX_VALUE);
//myFish é ["parrot", "anemone", "blue"]
//removed é ["trumpet", "surgeon"]