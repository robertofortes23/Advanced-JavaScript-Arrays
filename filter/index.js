/*O método filter() cria um novo array com todos os elementos que passaram no 
teste implementado pela função fornecida. 

Sintaxe.
var newArray = arr.filter(callback[, thisArg])
*/

function GrandeOSuficiente(valor, indice, array) {
    return valor >= 10;
  }
  
  var filtered = [12, 5, 8, 130, 44].filter(GrandeOSuficiente); //Passando condição como parâmetro
  // filtrado é [12, 130, 44]


  //Procurando em um array ------------

  const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

  /**
   * Array filters items based on search criteria (query)
   */
  const filterItems = (query) => {
    return fruits.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
  };
  
  console.log(filterItems('ap')); // ['apple', 'grapes']
  console.log(filterItems('an')); // ['banana', 'mango', 'orange']


    //Procurando em um array ------------

  const numeros = [2, 5, 3, 299, 23, 34, 44, 22, 11, 30];
  const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice);// Retornando valores maiores que 10
    return valor > 10 
}); 

// Exemplo: Filtrando entradas inválidas para JSON ------------

var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  var invalidEntries = 0;
  
  function filterByID(obj) {
    if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
      return true;
    } else {
      invalidEntries++;
      return false;
    }
  }
  
  var arrByID = arr.filter(filterByID);
  
  console.log('Filtered Array\n', arrByID);
  // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Number of Invalid Entries = ', invalidEntries);
  // Number of Invalid Entries = 4

