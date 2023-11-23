'use strict';

/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bikes = [
  {
    peso: 10,
    nome: 'Bike 1',
  },
  {
    nome: 'Bike 2',
    peso: 5,
  },
  {
    nome: 'Bike 3',
    peso: 3,
  },
  {
    nome: 'Bike 4',
    peso: 8,
  },
  {
    nome: 'Bike 5',
    peso: 3,
  },
  {
    nome: 'Bike 6',
    peso: 5,
  },
];

// bikes[0].peso;
let pesoMinimo = Number.MAX_VALUE;

for (let i = 0; i < bikes.length; i++) {
  const bike = bikes[i];

  if (bike.peso < pesoMinimo) {
    pesoMinimo = bike.peso;
  }
}

//3

console.log('Bici Leggere');

bikes
  .filter((bike) => {
    return bike.peso === pesoMinimo; //3 === 3 => true
  }) //[{nome: 'bike 1', peso: 3}, {nome: 'bike 2', peso: 3}]
  .map(
    (bike) =>
      `La bici ${bike.nome} è tra le bici più leggere con un peso di ${bike.peso}`
  )
  .forEach((bike) => console.log(bike));

//stampa le bici

// console.log(pesoMinimo, biciLeggere);

//attraversare elenco bici
// otterro bici corrente
