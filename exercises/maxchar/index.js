// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};
  let maxChar = "";
  let amount = 0;

  for (let char of str) {
    map[char] ? (map[char] += 1) : (map[char] = 1);
  }

  for (let char in map) {
    if (map[char] > amount) {
      maxChar = char;
      amount = map[char];
    }
  }

  return maxChar;
}

// function maxChar(str) {
//   let maxChar = "";
//   let maxAmount = 0;
//   const map = {};

//   for (let char of str) {
//     map[char] ? (map[char] += 1) : (map[char] = 1);
//   }

//   for (let char in map) {
//     if (map[char] > maxAmount) {
//       maxAmount = map[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// function maxChar(str) {
//   const map = {}
//   let maxChar = ""
//   let maxAmount = 0

//   for (let char of str) {
//     map[char] ? map[char] += 1 : map[char] = 1
//   }

//   for (let char in map) {
//     if (map[char] > maxAmount) {
//       maxAmount = map[char]
//       maxChar = char
//     }
//   }

//   return maxChar
// }

// function maxChar(str) {
//   let charMap = {};
//   let max = 0;
//   let maxChar = ''
//   for (let char of str) {
//   charMap[char] ? charMap[char]++ : charMap[char] = 1
//   }
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char
//     }
//   }
//   return  maxChar
// }

// function maxChar(str) {
//   let charMap = {}
//   let max = 0;
//   let maxChar = ''

//   for (let char of str) {
//     charMap[char] ? charMap[char]++ : charMap[char] = 1
//   }

//   for (let char in charMap) {
//     if (charMap[char] > 1) {

//   }

//   }

//   return maxChar
// }

// let chars = ['A', 'B', 'A', 'C', 'B']

// function maxChar(chars) {
//   let uniqueChar = []
//   charsMap = {}

//   for (let char of chars) {
//     charsMap[char] ? charsMap[char]++ : charsMap[char] = 1
//   }

//   for (let char in charsMap) {
//       uniqueChar.push(char)
//   }

//   return uniqueChar
// }

// console.log(maxChar(chars))

// function maxChar(chars) {
//   let map = {}
//   let max = 0
//   let maxChar = ""

//   for (let char of chars) {
//     map[char] ? map[char]++ : map[char] = 1
//   }

//   for (let char in map) {
//     if (map[char] > max) {
//       max = map[char]
//       maxChar = char
//     }
//   }

//   return maxChar
// }

// function maxChar(chars) {
//   let charMap = {}
//   let max = 0;
//   let maxChar = ''

//   for (let char of chars) {
//     charMap[char] ? charMap[char]++ : charMap[char] = 1
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char]
//       maxChar = char
//     }
//   }

//   return maxChar
// }

// function maxChar(chars) {
//   let charsMap = {}
//   let maxChar = ''
//   let max = 0

//   for (let char of chars) {
//     charsMap[char] ? charsMap[char]++ : charsMap[char] = 1
//   }

//   for (let char in charsMap) {
//     if (charsMap[char] > max) {
//       maxChar = char
//       max = charsMap[char]
//     }
//   }

//   return maxChar
// }

// console.log(maxChar(chars))

// function maxChar(str) {
//   let charMap = {}
//   let max = 0
//   let maxChar = ''

//   for (let char of str) {
//     charMap[char] ? charMap[char]++ : charMap[char] = 1
//   }
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char]
//       maxChar = char
//     }
//   }
//   return maxChar
// }

module.exports = maxChar;

// for (let char of str) {
//     if (!count[char]) {
//       count[char] = 1;
//     } else {
//       count[char]++
//     }
//   }

// for (let char of str) {
//   count[char] = count[char] + 1 || 1
//   }

// these are 2 other ways to create the map count is equal to charMap
