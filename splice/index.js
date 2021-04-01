
const nomes = ['Roberto', 'Maria', 'Fulano', 'Teste']
//nomes.splice(indice, delete, elem1, elem2, elem3)

const removidos = nomes.splice(0, 2);
console.log(nomes, removidos) // ['Fulano', 'Teste'] [ 'Roberto', 'Maria']
