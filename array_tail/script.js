console.log('array_tail')
// creo array vuoto che conterra un X numero di elementi(che saranno numeri randomici) scelti dall'utente
const numberList=[]
// chiedo all'utente quanti elementi deve contenere l'array
const userNumberElement = Number.parseInt(prompt("Quanti elementi deve avere l'array"))

let i
// creo funzione per generare nell'array il numero di elementi random richiesti dall'utente
for(i = 0; i < userNumberElement; i++){
    console.log(userNumberElement)
    numberList.push(parseInt(Math.random()*100+1))
}
// stampo in console gli ultimi 5 elementi dell'array
console.log(numberList.slice(-5))