let arr1 = [-10, -5, 0, 3, 7];
let arr2 = [0, 2, 5, ,8, 17];
let arr3 = [-10, -5, 3, 4, 7, 9];

function searchArr(arr) {
 for (let element of arr) {
   if (element === arr[element]) {
     return element
   }
}
  return -1
}

const binarySearch = (arr, min = 0, max = arr.length - 1) => {

  if ( max >= min ) {
    let mid = Math.floor(min + (max - min) / 2)
    if (mid === arr[mid]) {
      return mid;
    }
    let result = -1;
    if (mid + 1 <= arr[max]) {
      result = binarySearch(arr, mid + 1, max)
    }
    if (result != -1) {
      return result
    }
    if (mid - 1 >= arr[min]) {
      return binarySearch(arr, min, mid - 1)
    }
  }

   // return -1 if there is not fixed point
   return -1
}

// console.log(arr1.reduce((total, currentNum) =>  total + currentNum))

// console.log(searchArr(arr1))
// console.log(searchArr(arr2))
// console.log(searchArr(arr3))

console.log(binarySearch(arr1))
console.log(binarySearch(arr2))
console.log(binarySearch(arr3))