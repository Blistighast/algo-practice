// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n, row = 0, level ='') {
//   //recursion
//   // check base if its completely done
//   if (n === row) {
//     return;
//   }
  
//   //check if the row is done and print it
//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     pyramid(n, row + 1);
//     return;
//   }
  
//   //if row isnt done continue to build it
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     level += '#';
//   } else {
//     level += ' ';
//   }

//   //recall function to continue building level
//   pyramid(n, row, level)
// }

function pyramid(n, row = 0, step = '') {
  //set base case
  if (row === n) {
    return
  }

  //check if row is complete
  if (step.length === 2 * n - 1) {
    console.log(step)
    pyramid(n, row + 1)
    return
  }

  //build each element in step
  const midpoint = Math.floor((2 * n - 1) / 2)
  if (midpoint - row <= step.length && midpoint + row >= step.length) {
    step += '#'
  } else {
    step += ' '
  }

  pyramid(n, row, step)
}

// function pyramid(n) {
//   // find the mid point index of n
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     // 2 * n - 1 is the relationship between how many rows and columns
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

module.exports = pyramid;
