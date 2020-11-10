// /jsnack 2
// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// //Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale
// come sempre andate di prompt log etc. semplici e se fate qualcosa in più fate sottocatella bonus


var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

// ***********  DUPLICO ARRAY  *****************
var dup_array = arrayObj.slice();

console.table(arrayObj);
// ***********  CREO VARIABILE ALPHABETO DA CUI PESCARE LETTERE *****************

var alphabet = "abcdefghijklmnopqrstuvwxyz";

for (var i = 0; i < dup_array.length; i++) {

  // *********** PESCO LETTERE *****************
  var pos = alphabet[Math.floor(Math.random() * alphabet.length)]

  // *********** AGGIUNGO CHIAVE POSITION E LETTERA *****************
  dup_array[i].position = pos;
}
console.table(dup_array);
