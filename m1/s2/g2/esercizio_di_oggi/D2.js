/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 


I principali datatype in JavaScript sono:

-strings: righe di testo generiche comprese tra apici singoli ' ' o doppi apici " ", che possono comprendere una sola parola o frasi intere.
Può includere parole, frasi ma anche numeri.

-numbers: includono esclusivamente valori numerici, sia interi che decimali. A differenza delle stringhe non hanno bisogno di apici  ' ' o doppi apici " ".
i numeri decimali si rappresentano con punto e non con una virgola.



-booleans : un dato booleano può esprimere solo due valori: true o false. Qualsiasi datatype può essere convertito in un valore booleano all'interno di appoosite funzioni.

*/

let parola = 'Ciao';
console.log(parola); //esempio di string

let numero = 1;
console.log(numero); //esempio di numero

let condizione = true;
console.log(condizione); //esempio di booleano


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA
*/

const nome = 'Francesco';


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 12;
let numero2 = 20;
let c = numero1 + numero2;
console.log(c); //esempio di numero

let somma = 12+20;
console.log(somma); //esempio di numero



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = 'Cacciapuoti';

//D2.js:84 Uncaught SyntaxError: Identifier 'name' has already been declared



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sottrazione = (4 - x);
console.log(sottrazione); //esempio 1

let d = 4;
console.log(d-x); //esempio 2

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john';
let name2 = 'John';
console.log(name1 === name2); //esempio di uguaglianza


//extra 
console.log(name1.toLowerCase() === name2.toLowerCase())
