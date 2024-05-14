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
//     3. verificare se nell'array di frutta c'è il cocomero:
//     - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//     - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!
if ((frutta[6] != 'cocomero'))/*se array frutta contiene stringa diversa da 'cocomero'*/{
    console.log('Oh no, devo uscire a comprare il cocomero!') 
} else
    console.log('Trovato! Devo solo preparare il cocktail.')
// "Suggerimenti/Indicazioni:
//     Sì, lo sappiamo che esistono le funzioni includes() e indexOf() ma noi non le vogliamo utilizzare per cercare nel frigorifero.

