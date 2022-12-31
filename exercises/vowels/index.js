// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   // returns array or null if it cant find anything
//   // the g means it doesnt stop at first match, i makes the search case insensitive, [] means search for anything inside them
//   const matches = str.match(/[aeiou]/gi);

//   return matches ? matches.length : 0
// }

function vowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelAmount = 0

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelAmount++
    }
  }

  return vowelAmount
}
























// function vowels(str) {
//   let vowelAmount = 0
//   let vowels = ['a', 'e', 'i', 'o', 'u']

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       vowelAmount++
//     }
//   }

//   return vowelAmount
// }




















// function vowels(str) {
//   let vowelAmount = 0
//   let vowels = ['a', 'e', 'i', 'o', 'u']

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       vowelAmount++
//     }
//   }

//   return vowelAmount
// }

// function vowels(str) {
//   let vowelAmount = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       vowelAmount++;
//     }
//   }

//   return vowelAmount
// }

// function vowels(str) {
//   let vowelAmount = 0
//   const checker = "aeiou"

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       vowelAmount++
//     }
//   }

//   return vowelAmount
// }

// function vowels(str) {
//   let vowelAmount = 0

//   for (let char of str.toLowerCase()) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//       vowelAmount++
//     }
//   }

//   return vowelAmount
// }

module.exports = vowels;
