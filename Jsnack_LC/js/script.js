// ************************   ESERCIZIO 6 **********************
// var palla = {
//   "name" : 'Palla',
//   "weight" : 10
// };
//
// console.log(palla.name, palla.weight);
//
// var new_weight = parseInt(prompt("inserisci nuovo peso palla"))
// // palla["weight"] = new_weight;
// palla.weight = new_weight;
//
//
// console.log(palla.name, palla.weight);


// ************************   ESERCIZIO 7 **********************

// CONSEGNA:
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
// //

//
// var bycicle = [
//   {
//   "name": 'Bianchi',
//   "weight": 12
//   },
//   {
//   "name": 'Pedalabien',
//   "weight": 30
//   },
//   {
//   "name": 'Atlas',
//   "weight": 16
//   },
//   {
//   "name": 'Giotto',
//   "weight": 89
//   }
// ]
//
// var lighter = bycicle[0];
//
// for (var i = 0; i < bycicle.length; i++) {
//     // console.log(bycicle[i].weight);
//     if ( bycicle[i].weight < lighter.weight ) {
//       lighter = bycicle[i];
//     }
//   }
//
//   console.log("La bici piu leggera è " + lighter.name + " che pesa: " + lighter.weight + "kg" );




  // ************************   ESERCIZIO 8 **********************
//   CONSEGNA:
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// STEP”:
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
// consegna 12.25


var teams = [
{
  "name" : 'Milan',
  "points": 0,
  "fouls": 0
},
{
  "name" : 'Inter',
  "points": 0,
  "fouls": 0
},
{
  "name" : 'Juventus',
  "points": 0,
  "fouls": 0
},
{
  "name" : 'Roma',
  "points": 0,
  "fouls": 0
},
{
  "name" : 'Lazio',
  "points": 0,
  "fouls": 0
},
{
  "name" : 'Atalanta',
  "points": 0,
  "fouls": 0
}
]


for (var i = 0; i < teams.length; i++) {

  var points = Math.floor(Math.random() * 100 +1);
  var fouls = Math.floor(Math.random() * 100 +1);

  teams[i].points = points;
  teams[i].fouls = fouls;

}

  console.log(teams);
