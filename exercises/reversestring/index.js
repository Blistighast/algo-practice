// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const arr = [];
  for (let char of str) {
    arr.unshift(char);
  }

  return arr.join("");
}

// function reverse(str) {
//   const reversed = [];
//   for (let char of str) {
//     reversed.unshift(char);
//   }
//   return reversed.join("");
// }

// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('')
// }

// function reverse(str) {
//   let reversed = []
//   for (i = 0; i < str.length; i++) {
//     reversed.unshift(str[i])
//   }
//   return reversed.join('')
// }

// function reverse(str) {
//   // let reversed = ''
//   // for (let character of str) {
//   //   reversed = character + reversed
//   // }
//   // return reversed
// }

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   let revstr = ''
//   for (let char of str) {
//     revstr = char + revstr
//   }
//   return revstr
// }
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

// this is the fancy way

module.exports = reverse;

// turn a string into an array with the .split() function turn it back with .join()
