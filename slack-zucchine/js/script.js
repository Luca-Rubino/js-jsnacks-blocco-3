console.log('Slack-zucchine')

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchine = [
    {
        varieta:'africana',
        peso:150,
        lunghezza:'27cm',
    },
    {
        varieta:'tailandese',
        peso:80,
        lunghezza:'16cm',
    },
    {
        varieta:'filippina',
        peso:60,
        lunghezza:'15cm',
    },
    {
        varieta:'russa',
        peso:45,
        lunghezza:'7cm',
    },
    {
        varieta:'norvegese',
        peso:100,
        lunghezza:'16cm',
    },
    {
        varieta:'canadese',
        peso:85,
        lunghezza:'19cm',
    },
    {
        varieta:'brasiliana',
        peso:158,
        lunghezza:'31cm',
    },
    {
        varieta:'a-cavolfiore',
        peso:45,
        lunghezza:'7cm',
    },
    {
        varieta:'francese',
        peso:54,
        lunghezza:'10cm',
    },
    {
        varieta:'italiana',
        peso:87,
        lunghezza:'18cm',
    }
]

const pesoTotale = zucchine[0].peso + zucchine[1].peso + zucchine[2].peso + zucchine[3].peso + zucchine[4].peso + zucchine[5].peso + zucchine[6].peso + zucchine[7].peso + zucchine[8].peso + zucchine[9].peso
console.log(pesoTotale)