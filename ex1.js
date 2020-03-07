
// Zadaniem metody isNumber jest spawdzenie czy podawana wartość jest liczbą ( type number )

const isNumber = value => {
 // your code
 return typeof value === "number"
}

console.log('cyfra 1:',isNumber(1))
console.log('cyfra 5:',isNumber(5))
console.log('cyfra 5.01:',isNumber(5.01))
console.log('litera a:',isNumber('a'))
console.log('null:',isNumber(null))
console.log('undefined', isNumber(undefined))
