// metoda shouldUserBeAutorized powinna zwracac wartośc true jeżeli użytkownik poda imie oraz ma ukończone 18 lat

const shouldUserBeAutorized = (name, age) => {
  // your code
  return false
}

console.log(' Marek, 18 lat', shouldUserBeAutorized('Marek', 18))
console.log(' brak imienia, 20 lat:', shouldUserBeAutorized('', 20))
console.log(' null, 20 lat:', shouldUserBeAutorized('', 18))
console.log(' Marek, 5 lat', shouldUserBeAutorized('Marek', 18))