// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n, row = 0, step = '') {
//   // recursion method
//   //first check for base case, when to stop completely
//   if (row === n) {
//     return;
//   }

//   //check when we should finish this step and move on to the next one
//   if (step.length === n) {
//     console.log(step)
//     steps(n, row + 1)
//     //if we meet this case we dont want to keep going so return
//     return
//   }

//   //if row isnt done continue to build it
//   if (step.length <= row) {
//     step += '#'
//   } else {
//     step += ' '
//   }
  

//   // need to recurse to continue building the same row
//   steps(n, row, step)
// }

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let step = '';
//     step += '#'.repeat(i)
//     step += ' '.repeat(n - i)
//     console.log(step)
//   }
// }

function steps(n, row = 0, step = '') {
  // what is base scenario to leave the recursion
  if (row === n) {
    return;
  }

  //when step finished increase row and make new step
  if (step.length === n) {
    console.log(step)
    steps(n, row + 1)
    return
  }

  //if step isnt finished continue to build it
  if (step.length <= row) {
    step += '#'
  } else {
    step += ' '
  }

  steps(n, row, step)
}

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     step = ''
//     for (let col = 0; col < n; col++) {
//       if (row >= col) {
//         step += '#'
//       } else {
//         step += ' '
//       }
//     }
//     console.log(step)
//   }
// }


// function steps(n) {  
//   for (let i = 1; i <= n; i++) {
//     console.log((`#`.repeat(i)) + (' '.repeat(n - i)))
//   }
// }

// function steps(n, row = 0, step = '') {
//   if (row === n) {
//     return;
//   }

//   if (n === step.length) {
//     console.log(step);
//     steps(n, row + 1);
//     return;
//   }

//   if (step.length <= row) {
//     step += '#';
//   } else {
//     step += ' ';
//   }
  
//   steps(n, row, step)
// }


module.exports = steps;

// function steps(n, row = 0) {
//   if (row === n) {
//     return;
//   }
//  let step = '';
//   for (let col = 0; col < n; col++) {
//     if (col <= row) {
//       step += '#'
//     } else {
//       step += ' '
//     }
//   }

//   console.log(step);
//   steps(n, row + 1);
// }

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let step = '';
//     for (let j = 0; j < n; j++) {
//       if (i >= j) {
//         step += '#'
//       } else {
//         step += ' '
//       }
//     }
//     console.log(step)
//   }
// }

// function steps(n) {
//   for (let i = 1; i < n + 1; i++){
//     let step = '';
//     for (let j = 0; j < i; j++) {
//       step += '#'
//     }
//     for (let j = 0; j < n - i; j++) {
//       step += ' '
//     }
//     console.log(step)
//   }
// }

// function steps(n) {
//   for (let i = 1; i < n + 1; i++) {
//     let step = '';
//     step += '#'.repeat(i)
//     step += ' '.repeat(n - i)
//     console.log(step)
//   }
// }