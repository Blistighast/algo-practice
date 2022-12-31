// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let counter = [0]
  let arr = [root, 's']

  while (arr.length > 1) {
    let node = arr.shift()

    if (node === 's') {
      counter.push(0)
      arr.push('s')
    } else {
      arr.push(...node.children)
      counter[counter.length - 1]++
    }
  }

  return counter
}

// function levelWidth(root) {
//   let counter = [0];
//   // s for stopper value, signifies end of level
//   let arr = [root, 's'];

//   while (arr.length > 1) {
//     //want breadth first search
//     let node = arr.shift();

//     if (node === 's') {
//       arr.push(node);
//       counter.push(0);
//     } else {
//       arr.push(...node.children);
//       counter[counter.length - 1]++;
//     }
//   }
//   return counter;
// }

module.exports = levelWidth;
