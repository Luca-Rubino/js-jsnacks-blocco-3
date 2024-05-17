console.log('array_lista')

// 1. TuttiFrutti

// Cartella: array-lista;

// Descrizione:
// Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola';
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?

// Fasi:
//     1. creare l'array con la frutta del frigorifero
let frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
console.log(frutta)
//     2. aggiungere la pesca all'array della frutta
frutta.push('pesca')
// stampo array frutta per controllo
console.log(frutta) 
//     3. verificare se nell'array di frutta c'è il cocomero:
//     - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//     - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
// creo variabile negativa per la ricerca
let fruttaCercata = 'Oh no, devo uscire a comprare il cocomero!'
//  creo funzione per cercare elemento cocomero
for(let i=0; i<frutta.length; i++){
    // stampo singoli elementi dell'arrey frutta per controllare la corretta scrittura della funzione
    console.log(frutta[i])
    // stabilisco condizioni della ricerca andata a buon fine
    if(frutta[i]=='cocomero'){
        fruttaCercata ='Trovato! Devo solo preparare il cocktail.'
    }   
}
// stampo risultato ricerca
console.log(fruttaCercata)
// stampo elenco per ulteriore controllo
console.log(frutta)
// "Suggerimenti/Indicazioni:
//     Sì, lo sappiamo che esistono le funzioni includes() e indexOf() ma noi non le vogliamo utilizzare per cercare nel frigorifero.

