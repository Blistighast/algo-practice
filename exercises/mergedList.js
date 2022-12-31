// create a merged list by combining the intervals that overlap
let list = [[2, 4],[3,6],[15,17]]

function merger(list) {
  //copy list to make changes
  let mergedList = list.slice()
  let i = 0

  //run through the new list
  while (i < mergedList.length - 1) {
    //check if the current interval overlaps with the next interval
    if (mergedList[i][1] > mergedList[i + 1][0]) {
      //change the current interval to the new combined interval and remove the next interval
      // mergedList[i][1] = mergedList[i + 1][1]
      mergedList[i][1] = Math.max(mergedList[i][1], mergedList[i + 1][1])
      mergedList.splice(i + 1, 1)
    } else {
      //if the current interval doesnt overlap move on to the next interval
      i++
    }
  }

  return mergedList
}


console.log(merger(list))

//how would you add a new interval to the sorted list of intervals
let newInter = [18,27]
let merged = (merger(list))

function addInter(merged, newInter) {
  let newMerged = merged.slice()

  //check if newInter is before all original intervals
  if (newInter[0] < newMerged[0][0]) {
    newMerged.unshift(newInter)

    return merger(newMerged)
  }

  if (newInter[0] > newMerged[newMerged.length - 1][0]) {
    newMerged.push(newInter)

    return merger(newMerged)
  }

  //first loop through the full list checking the first element of each interval to see where it goes
  for (let interval = 0; interval < newMerged.length - 1; interval++) {
    //checks if first element of newinter is between the current itnerval and next itnerval
    if (newMerged[interval][0] <= newInter[0] && newInter[0] <= newMerged[interval + 1][0]) {
      //if it is place it between those 2 intervals
      newMerged.splice(interval + 1, 0, newInter)
      //dont need to continue once its placed
      break
    }
  }
  //run the newly merged array through the merger to check and recombine the intervals
  return merger(newMerged)
}

console.log(addInter(merged, newInter))







































// function merger(list) {
//   //copy list to change
//   let merged = list.slice()
//   let i = 0;

//   while (i < merged.length - 1) {
//     let current = merged[i];
//     let next = merged[i + 1];

//     //check if arrays overlap
//     if (current[1] >= next[0]) {
//       //replace upper number of current with the new higher number
//       // the number on next might not be bigger than current, so need to compare and pick the max
//       current[1] = Math.max(current[1], next[1]);
//       //delete the next subarray, since it is now redundant
//       merged.splice(i + 1, 1)
//     } else {
//       //move on to next array
//       i++
//     }
//   }
//   return merged
// }