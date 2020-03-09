 // Zadanie polega na dodaniu do tablicy lyrics zawierającej kolejne słowa piosenki (string), spacje na końcu każdego słowa
 // "słowo" => "słowo "

 // po wynonaniu tego zadania należy zastosować metodę reduce na tablicy lyrics celem stworzenia jedengo zdania

 const lyrics = ["Never", "gonna", "give", "you", "up",
  "Never" ,"gonna", "let" ,"you" ,"down"]

  const insertSpaces = lyr => {
    // your code
    return lyr.map( word => `${word} `)
  }

  const updateLyrics = lyr => {
    const newLyrics = [...insertSpaces(lyr)]
    // your code
    return newLyrics.reduce((accumulator, word) =>  accumulator + word, "")
  }

  console.log(updateLyrics(lyrics))