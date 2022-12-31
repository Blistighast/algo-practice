// You are given an integer array of size N. 
//   * Every element of the array is greater than or equal to 0.
//   * Starting from arr[startIndex], follow each element to the index it points to. 
//   * Continue to do this until you find a cycle. 
//   * Return the length of the cycle. If no cycle is found return -1
//   *
//   * Examples:
//   * countLengthOfCycle([1, 0], 0) == 2
//   * countLengthOfCycle([1, 2, 0], 0) == 3
//   * [[1, 3, 0, 1], 0, 2],
//  */
function countLengthOfCycle(arr, startIndex) {
  let map = {}
  let cycleLength = 1

  for (let i = startIndex; i <= arr.length; i = arr[i]) {
    if (map[i]) {
      return cycleLength  - map[i]
    } else {
      map[i] = cycleLength
      cycleLength++
    }
  }

  return false
}

























// function countLengthOfCycle(arr, startIndex) {
//   let map = {}
//   let cycleLength = 0

//   for (let i = startIndex; i <= arr.length; i = arr[i]) {
//     if (map[i]) {
//       return cycleLength - map[i]
//     } else {
//       map[i] = cycleLength
//       cycleLength++
//     }
//   }

//   return false
// }

// function countLengthOfCycle(arr, startIndex) {
//   let map = {}
//   let cycleCounter = 0

//   for (let i = startIndex; i <= arr.length; i = arr[i]) {
//     if (map[i]) {
//       return cycleCounter - map[i]
//     } else {
//       map[i] = cycleCounter
//       cycleCounter++
//     }
//   }

//   return false
// }
//  function countLengthOfCycle(arr, startIndex) {
//    let lengthCounter = 0
//    let visited = [] // [0,1 ]

//   for (let i = startIndex; i <= arr.length; i = arr[i]) {
//     if (visited.includes(arr[i])) {
//       return lengthCounter
//     }
//     lengthCounter++
//     visited.push(i)
//   }
   
//    return -1;
//  }
 
 /**
  * boolean doTestsPass()
  * Returns true if all the tests pass. Otherwise returns false.
  */
//  const doTestsPass = () => {
//    let testsPassed = true;
//    let testCases = [
//    [[1, 0], 0, 2],
//    [[1, 2, 0], 0,  3]
//    ];

module.exports = countLengthOfCycle;