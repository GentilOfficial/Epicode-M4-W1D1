// 1. Crea una funzione che controlli due numeri interi. Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50.

function checkIntegers(num1, num2) {
  return num1 === 50 || num2 === 50 || num1 + num2 === 50
}

console.log(checkIntegers(25, 25))

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function removeCharInPosition(string, position) {
  if (string.length <= 0) return null

  return string
    .slice(0, position - 1)
    .concat(string.slice(position, string.length))
}
console.log(removeCharInPosition("non so cosa scrivere", 10))

// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna 'true' se rispettano queste condizioni, altrimenti ritorna 'false'.

function checkIfInRange(num, min, max) {
  if (min > max) {
    return num >= max && num <= min
  }

  return num >= min && num <= max
}

function checkNumbersInRange(num1, num2) {
  return (
    (checkIfInRange(num1, 40, 60) || checkIfInRange(num1, 70, 100)) &&
    (checkIfInRange(num2, 40, 60) || checkIfInRange(num2, 70, 100))
  )
}

console.log(checkNumbersInRange(45, 75))

// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni 'false'.

function isIconicCity(city) {
  if (city.length <= 0) return null

  return city.toLowerCase().startsWith("los") ||
    city.toLowerCase().startsWith("new")
    ? city
    : false
}

console.log(isIconicCity("New York"))

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.

function sumAll(elements) {
  let sum = 0

  for (let el of elements) {
    sum += el
  }

  return sum
}

console.log(sumAll([1, 2, 3, 4, 5, 6, 7]))

// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna 'true', altrimenti ritorna 'false'.

function checkIfNotContainsOneOrThree(list) {
  for (let item of list) {
    if (item === 1 || item === 3) return false
  }
  return true
}

console.log(checkIfNotContainsOneOrThree([1, 2, 4, 8, 16]))

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna "acuto"
// Angolo ottuso: tra i 90° e i 180° ⇒ ritorna "ottuso"
// Angolo retto: 90° ⇒ ritorna "retto"
// Angolo piatto: 180° ⇒ ritorna "piatto"

function angleType(degrees) {
  if (typeof degrees !== "number" || degrees < 0 || degrees > 360) {
    return "non è un angolo"
  }

  switch (degrees) {
    case 0:
    case 360:
      return "giro"
    case 90:
      return "retto"
    case 180:
      return "piatto"
    default:
      if (degrees < 90) {
        return "acuto"
      } else if (degrees > 90 && degrees < 180) {
        return "ottuso"
      }
  }

  return "concavo"
}

console.log(angleType(145))

// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT".

function createAcronym(phrase) {
  if (phrase.length <= 0) return null

  return phrase
    .split(" ")
    .map((string) => string[0].toUpperCase())
    .join("")
}

console.log(createAcronym("Fabbrica Italiana Automobili Torino"))

// EXTRA 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

function getCharList(string) {
  const list = []
  for (let char of string) {
    if (!list.includes(char)) {
      list.push(char)
    }
  }
  return list
}

function countCharInString(char, string) {
  let count = 0
  for (let c of string) {
    count += c === char ? 1 : 0
  }
  return count
}

function countCharsInString(string) {
  const charList = getCharList(string)
  for (let i = 0; i < charList.length; i++) {
    charList[i] = {
      char: charList[i],
      count: countCharInString(charList[i], string),
    }
  }
  return charList
}

function popularChar(string) {
  if (string.length <= 0) return null

  const charList = countCharsInString(string.toLowerCase())

  let popular = charList[0]

  for (let item of charList) {
    if (item.count > popular.count) {
      popular = item
    }
  }

  return popular.char
}

console.log(popularChar("pippo&topolino"))

// EXTRA 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna 'true', altrimenti ritorna 'false'.

function normalizeString(string) {
  return string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

function areCharListsEquals(list1, list2) {
  let passed = 0
  for (let i1 of list1) {
    for (let i2 of list2) {
      if (i1.char === i2.char && i1.count === i2.count) {
        passed++
      }
    }
  }

  return passed === list1.length
}

function checkIfAnagrams(string1, string2) {
  const normalizedS1 = normalizeString(string1)
  const normalizedS2 = normalizeString(string2)

  if (normalizedS1.length === normalizedS2.length) {
    const charListOfS1 = countCharsInString(normalizedS1)
    const charListOfS2 = countCharsInString(normalizedS2)

    if (charListOfS1.length === charListOfS2.length) {
      return areCharListsEquals(charListOfS1, charListOfS2)
    }
  }
  return false
}

console.log(checkIfAnagrams("noto,", " tono"))

// EXTRA 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da "cartine" e ["carenti", "incerta", "espatrio"], il valore ritornato deve essere ["carenti", "incerta"].

function getAnagrams(word, list) {
  const correctAnagrams = []
  for (let item of list) {
    if (checkIfAnagrams(word, item)) {
      correctAnagrams.push(item)
    }
  }
  return correctAnagrams
}

console.log(getAnagrams("cartine", ["carenti", "incerta", "espatrio"]))

// EXTRA 4. Partendo da una stringa passata come parametro, ritorna 'true' se la stringa è palindroma o 'false' se non lo è.

function reverseString(string) {
  let reverse = ""
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i]
  }
  return reverse
}

function isPalindrome(string) {
  return string === reverseString(string)
}

console.log(isPalindrome("anna"))

// EXTRA 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

function reverseInteger(number) {
  return Number(reverseString(number.toString()))
}

console.log(reverseInteger(12))

// EXTRA 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una "scala" creata con il carattere "#" e avente X scalini.
// Es.
// X = 2
// '# '
// '##'
// X = 3
// '# '
// '## '
// '###'

function createStairs(x) {
  if (x <= 0) return null
  let print = ""
  for (let i = 0; i < x; i++) {
    print = "#"
    for (let j = 0; j < i; j++) {
      print += "#"
    }
    console.log(print)
  }
}

createStairs(5)

// EXTRA 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. "Ciao" ****⇒ "oaiC"

console.log(reverseString("Ciao come stai?"))

// EXTRA 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]

function splitArray(arrayList, y) {
  const newArray = []
  let temp = []
  for (let i = 0; i < arrayList.length; i++) {
    if (temp.length === y) {
      newArray.push(temp)
      temp = []
    }
    temp.push(arrayList[i])
  }
  newArray.push(temp)

  return newArray
}

console.log(splitArray([1, 2, 3, 4], 2))

// EXTRA 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una "piramide" create con il carattere "#" e avente X strati.
// Es.
// X = 3
// ' # '
// ' ### '
// '#####'

function createPyramid(x) {
  if (x <= 0) return null
  let print = ""
  for (let i = 0; i < x; i++) {
    print = ""
    for (let j = 0; j < x; j++) {
      print += j >= x - 1 - i ? "#" : " "
    }
    console.log(print + reverseString(print.slice(0, x - 1)))
  }
}

createPyramid(10)

// EXTRA 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
// Es. N = 2
// [[1, 2],[4, 3]]
// N = 3
// [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
// N = 4
// [[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]

function createSpiralMatrix(n) {
  if (n <= 0) return null

  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))

  let count = 1
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n - i; j++) {
      matrix[i][j] = count++
    }

    for (let j = i + 1; j < n - i; j++) {
      matrix[j][n - 1 - i] = count++
    }

    for (let j = n - 2 - i; j >= i; j--) {
      matrix[n - 1 - i][j] = count++
    }

    for (let j = n - 2 - i; j >= i + 1; j--) {
      matrix[j][i] = count++
    }
  }

  return matrix
}

console.log(createSpiralMatrix(5))
