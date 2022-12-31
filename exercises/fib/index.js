// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//generic memoize function that can be used for almost anything
//caches results from function so they arent done more than once

// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if (cache[args]) {
//       return cache[args]
//     }
//     const result = fn.apply(this, args);
//     cache[args] = result

//     return result;
//   }
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib)

// function fib(n) {
//   let first = 0;
//   let second = 1;
//   let result = 1;
  
//   for (let i = 2; i <= n; i++) {
//     result = first + second
//     first = second
//     second = result
//   }

//   return result;
// }

// function fib(n) {
//   if (n < 2) {
//     return n
//   }

//   return fib(n - 1) + fib(n - 2)
// }

function fib(n) {
  let first = 0
  let second = 1
  let end = 1

  for (let i = 2; i <= n; i++) {
    end = first + second
    first = second
    second = end
  }

  return end
}













// function fib(n) {
//   let first = 0;
//   let second = 1;
//   let result = 1;

//   for (let i = 2; i <= n; i++) {
//     result = first + second;
//     first = second;
//     second = result;
//   }

//   return result
// }

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//   let arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 2] + arr[i - 1])
//   }

//   return arr[n]
// }

// function fib(n) {
//   let firstNum = 0
//   let secondNum = 1
//   let result = 1

//   for (let i = 0; i < n - 1; i++) {
//     result = firstNum + secondNum;
//     firstNum = secondNum;
//     secondNum = result;
//   }

//   return result
// }

module.exports = fib;
