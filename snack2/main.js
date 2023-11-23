'use strict';

/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.


Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.


Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
  {
    nome: 'Team 1',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Team 2',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Team 3',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Team 4',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Team 5',
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

const newTeams = teams.map((team) => {
  return {
    ...team,
    /*
    nome: 'Team 5',
    puntiFatti: 0,
    falliSubiti: 0,
    */
    puntiFatti: Math.floor(Math.random() * 20),
    puntiSubiti: Math.floor(Math.random() * 100),
  };
});

console.log(teams);
console.log(newTeams);

teams[0].falliSubiti = 10000000;

console.log(teams);
console.log(newTeams);

// //generazione punti e falli random
// teams.forEach((team) => {
//   team.puntiFatti = Math.floor(Math.random() * 20);
//   team.falliSubiti = Math.floor(Math.random() * 100);
// });

// const result = teams.map(({ nome, falliSubiti }) => {
//   return {
//     nome,
//     falliSubiti,
//   };
// });

// console.log(result);
