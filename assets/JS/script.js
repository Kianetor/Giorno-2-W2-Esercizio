/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/


/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto "persona" con: nome, cognome, eta, citta.
   Stampa: "Mario Rossi, 25 anni, vive a Roma."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const persona = {
   nome: "Mario",
   cognome: "Rossi",
   eta: 25,
   citta: "Roma"
};
console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, vive a ${persona.citta}.`);

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto "persona": aggiungi "email", poi rimuovi "eta".
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
persona.email = "mario.rossi@email.com";
delete persona.eta;
console.log(persona);


/* ESERCIZIO 3 — Oggetto annidato
   Oggetto "utente" con una proprietà "indirizzo" (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utente = {
   nome: "Mario",
   indirizzo: {
      via: "Del Corso 1",
      citta: "Roma",
      cap: "00135"
   }
};
console.log(utente.indirizzo.cap);


/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto "persona", variabile chiave = "nome".
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const chiave = "nome";
console.log(persona[chiave]);


/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa "Pareggio".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 1;
const b = 2;
const c = 2;
if (a > b && a > c) {
   console.log(`Il numero più grande è ${a}`);
} else if (b > a && b > c) {
   console.log(`Il numero più grande è ${b}`);
} else if (c > a && c > b) {
   console.log(`Il numero più grande è ${c}`);
} else {
   console.log("Pareggio");
}



/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile "totale".
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: "Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€"
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totale = 35;

let spedizione; //valorizzo più volte
if (totale >= 50) {
  spedizione = 0;
} else {
  spedizione = 9.90;
}
const totaleFinale = totale + spedizione;
console.log(`Totale carrello: ${totale}€ — Spedizione: ${spedizione}€ — Totale finale: ${totaleFinale}€`);

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, "ciao", true]).
   Con un for + if, per ogni elemento stampa "x è un numero" o "x non è un numero".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const valoriDiversi = [42, "ciao", true];
for (let i = 0; i < valoriDiversi.length; i++) {
  if (typeof valoriDiversi[i] === "number") {
    console.log(`${valoriDiversi[i]} è un numero`);
  } else {
    console.log(`${valoriDiversi[i]} non è un numero`);
  }
}


/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [];
numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);
numeri.unshift(0);
console.log(numeri);
console.log(`Length: ${numeri.length}`);


/* ESERCIZIO 9 — Carrello con splice
   Array ["Penna", "Quaderno", "Zaino", "Astuccio"].
   Con splice: rimuovi "Quaderno", poi inserisci "Diario" al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const carrello = ["Penna", "Quaderno", "Zaino", "Astuccio"];
carrello.splice(1, 1); 
console.log("Dopo la rimozione:", carrello);
carrello.splice(1, 0, "Diario"); 
console.log("Dopo l'inserimento:", carrello);



/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ["Penna", "Quaderno", "Zaino"].
   cercato = "Zaino".
   Con includes: stampa "Zaino è in carrello: true".
   Con indexOf: stampa la posizione, o "Non in carrello".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: "Mario (25 anni)".
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → "OFFERTA: nome (prezzo€)"
   - disponibile && prezzo >= 10 → "nome — prezzo€"
   - !disponibile → "nome — esaurito"
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array "inverso", riempilo con un for (dall'ultimo al primo) usando push.
   Stampa "inverso".
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
