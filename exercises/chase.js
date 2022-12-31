/*
  Find the numbers closest to each other on the number line.
  In this case the answer is 45 and 46.
  [1, 5, 16, 46, 7, 10, 45]
 */

// go through the array, 
// for each element in the array 
// compare that element with each of the other elements after it in the array
// compare the lowest value of each of the elements in the array
// return the 2 elements that have the lowest value

function closeNumber(arr) {
  let distanceList = {}

  for (let i = 0; i <= arr.length; i++) {
    let MinDistance = Number.MAX_VALUE
    let otherLowestNumber = null;
    for (let j = i + 1; j <= arr.length; j++) {
     if (Math.abs(arr[j] - arr[i]) < MinDistance) {
        MinDistance = Math.abs(arr[j] - arr[i])
        otherLowestNumber = arr[j]
     }
    }
    distanceList[MinDistance] = [arr[i], otherLowestNumber]
  }
  console.log(distanceList[Math.min(...Object.keys(distanceList))])
return distanceList[Math.min(...Object.keys(distanceList))]
}

closeNumber([1, 5, 16, 46, 7, 10, 45])
closeNumber([1, 5, 16, 46, 1, 7, 10, 45])
closeNumber([5, 16, 46, 5, 1, 7, 10, 45, 1, 5])
 
/*
  Find the student with the highest average score, given a list of students with their scores:
  [
    ['joe', 80],
    ['raj', 70],
    ['raj', 90],
    ['mary', 70],
    ['raj', 80],
    ['mary', 80]
  ]
  In this case both Joe and Raj have an average score of 80.
*/

