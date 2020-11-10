// /jsnack 1
// //Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente


// ************* CREO ARRAY NOMI E ARRAY VUOTO PER QUELLI SELEZIONATI ************

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara','Sara','Luca','Andrea'];
var newArray = [];

// ************* CHIDO NUMERI ALL'UTENTE ************

var num1 = parseInt(prompt("inserisci un numero tra 0 e "+ (myArray.length - 1)));
var num2 = parseInt(prompt("inserisci un numero tra 0 e "+ (myArray.length - 1)));

// ************* CONTROLLO LA SEQUENZIALITà DEI NUMERI ************

if (num1 < num2) {

  for (var i = 0; i < myArray.length; i++) {
    // devo confrontare l indice  di ogni posto dell array e se è sia maggiore di num1 e min di num2 lo pusho
    while (i >= num1 && i <= num2) {
      newArray.push(myArray[i]);
      i++
    }
  }

}else {

  for (var i = 0; i < myArray.length; i++) {
    while (i >= num2 && i <= num1) {
      newArray.push(myArray[i]);
      i++
    }
  }
}

console.log("HAI SELEZIONATO I SEGUENTI NOMI: " + newArray);
