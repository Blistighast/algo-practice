// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let reversed = parseInt(n.toString().split('').reverse().join(''));
//   return reversed * Math.sign(n);

//   if (n < 0) {
//     return reversed * -1;
//   }
//   return reversed;
// }

// function reverseInt(n) {
//   let reversed = parseInt(n.toString().split('').reverse().join(''))
//   return reversed * Math.sign(n)
// }

// function reverseInt(n) {
//   let revint = parseInt(n.toString().split('').reverse().join(''))
//   if (n < 0) {
//     revint = revint * -1
//   }
//   return revint
// }

function reverseInt(n) {
  let rev = parseInt(n.toString().split('').reverse().join(''))
  if (n < 0) {
    rev *= -1
  }
  return rev
}



module.exports = reverseInt;

// important things to know here are parseInt and toString to turn a string back into a number and vice versa
// Math.sign() returns a -1 if the number is negative and 1 if positive