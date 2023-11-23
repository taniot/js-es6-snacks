'use strict';

/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.Usiamo i nuovi metodi degli array foreach o filter.
*/

function getNewArray(arr, min, max) {
  switch (true) {
    case !Array.isArray(arr):
    case min > max:
    case min < 0 || max > arr.length - 1:
      return -1;

    default:
      return arr.filter((_, index) => index >= min && index <= max);
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

const result1 = getNewArray(numbers, 2, 6);
const result2 = getNewArray(numbers, 6, 2);
const result3 = getNewArray(numbers, -5, 20);
const result4 = getNewArray('pippo', 2, 6);
const result5 = getNewArray(numbers, 0, 1);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
