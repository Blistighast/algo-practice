// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let cleanA = cleanStr(stringA);
  let cleanB = cleanStr(stringB);
  const mapA = map(cleanA);
  const mapB = map(cleanB);

  if (cleanA.length !== cleanB.length) {
    return false;
  }

  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) {
      return false;
    }
  }

  return true;
}

function cleanStr(str) {
  return str.replace(/\W/g, "").toLowerCase();
}

function map(str) {
  const map = {};
  for (let char of str) {
    map[char] ? (map[char] += 1) : (map[char] = 1);
  }

  return map;
}

// function anagrams(stringA, stringB) {
//   const cleanA = cleanStr(stringA)
//   const cleanB = cleanStr(stringB)
//   const mapA = mapStr(cleanA)
//   const mapB = mapStr(cleanB)

//   if (cleanA.length !== cleanB.length) {
//     return false
//   }

//   for (let char in mapA) {
//     if (mapA[char] !== mapB[char]) {
//       return false
//     }
//   }

//   return true
// }

// function cleanStr(str) {
//   return str.replace(/\W/g, '').toLowerCase()
// }

// function mapStr(str) {
//   const map = {}

//   for (let char of str) {
//     map[char] ? map[char]++ : map[char] = 1
//   }

//   return map
// }

// function anagrams(stringA, stringB) {
//   let cleanA = cleanStr(stringA)
//   let cleanB = cleanStr(stringB)
//   let charMapA = strMap(cleanA)
//   let charMapB = strMap(cleanB)

//   if (cleanA.length !== cleanB.length) {
//     return false
//   }

//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false
//     }
//   }

//   return true
// }

// const cleanStr = (str) => {
//   return str.replace(/\W/g, '').toLowerCase()
// }

// const strMap = (str) => {
//   let map = {}

//   for (let char of str) {
//     map[char] ? map[char]++ : map[char] = 1
//   }

//   return map
// }

anagrams("RAIL! SAFETY!", "fairy tales");

// function anagrams(stringA, stringB) {
//   cleanA = cleanString(stringA)
//   cleanB = cleanString(stringB)
//   mapA = buildMap(cleanA)
//   mapB = buildMap(cleanB)

//   if (cleanA.length !== cleanB.length) {
//     return false
//   }

//   for (let char in mapA) {
//     if (mapA[char] !== mapB[char]) {
//       return false
//     }
//   }
//   return true

// }

// function cleanString(str) {
//   return str.replace(/\W/g, '').toLowerCase()
// }

// function buildMap(str) {
//   let map = {}

//   for (let char of str) {
//     map[char] ? map[char]++ : map[char] = 1
//   }

//   return map
// }

// anagrams('RAIL! SAFETY!', 'fairy tales')

// function anagrams(stringA, stringB) {
//   let cleanA = cleanString(stringA)
//   let cleanB = cleanString(stringB)
//   let mapA = buildMap(cleanA)
//   let mapB = buildMap(cleanB)

//   if (cleanA.length !== cleanB.length) {
//     return false
//   }

//   for (let char in mapA) {
//     if (mapA[char] !== mapB[char]) {
//       return false
//     }
//   }

//   return true
// }

// function buildMap(string) {
//   let stringMap = {}

//   for (let char of string) {
//     stringMap[char] ? stringMap[char]++ : stringMap[char] = 1
//   }

//   return stringMap
// }

// function cleanString(string) {
//   return string.replace(/\W/g, '').toLowerCase()
// }

// function anagrams(stringA, stringB) {
//   let mapA = cleanString(stringA)
//   let mapB = cleanString(stringB)

//   if (stringA.length !== stringB.length) {
//     return false
//   }

//   for (let char in mapA) {
//     if (mapA[char] !== mapB[char]) {
//       return false
//     }
//   }
//   return true
// }

// function cleanString(string) {
//   let stringMap = {}
//   let cleanString = string.replace(/\W/g, '').toLowerCase()

//   for (let char of cleanString) {
//     stringMap[char] ? stringMap[char]++ : stringMap[char] = 1
//   }

//   return stringMap
// }

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB)
// }

// function cleanString(string) {
//   return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
// }

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const charMapA = charMap(stringA);
//   const charMapB = charMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length ) {
//     return false;
//   }

//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false
//     }
//   }

//   return true
// }

// function charMap(string) {
//   const charMap = {}
//   for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] ? charMap[char]++ : charMap[char] = 1
//   }
//   return charMap;
// }

// to get the amount of keys in an object you can use Object.keys(charMap).length
