const intNumber = 11
const floatNumber = 10.01

console.log("Wynik dodawania float i int: ",intNumber + floatNumber)

const hello = 'Hello'
const there = "There"
const general = `General Kenobi`

console.log(`well ${hello + ' ' + there}`, general)

const nullValue = null
const undefinedValue = undefined

console.log('wynik dodawania nulla i undefined: ', nullValue + undefinedValue)

console.log('Infinity: ', intNumber / 0);

const NaNValue = general / intNumber
console.log('NaN: ', NaNValue)

const obj = {}
const table = []

console.log('wynik dodawania obiektu z obiektem :', {} + {})
console.log('wynik dodawania obiektu z tablica :', {} + [])
console.log('wynik dodawania tablicy z obiektem :', [] + {})


