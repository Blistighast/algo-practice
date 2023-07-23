// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunk = [];

  for (let i = 0; i < array.length; i += size) {
    chunk.push(array.slice(i, i + size));
  }

  return chunk;
}

// function chunk(array, size) {
//   const chunk = [];
//   for (let i = 0; i < array.length; i += size) {
//     chunk.push(array.slice(i, i + size));
//   }

//   return chunk;
// }

// function chunk(array, size) {
//   const chunk = []

//   for (let i = 0; i < array.length; i += size) {
//     let subArr = array.slice(i, i + size)
//     chunk.push(subArr)
//   }

//   return chunk
// }

// function chunk(array, size) {
//   let chunk = [];

//   for (let element of array) {
//     let last = chunk[chunk.length - 1]

//     if (!last || last.length === size) {
//       chunk.push([element])
//     } else {
//       last.push(element)
//     }
//   }

//   return chunk
// }

// function chunk(array, size) {
//   let chunk = []

//   for (let i = 0; i < array.length; i += size) {
//     let subArr = array.slice(i, i + size)
//     chunk.push(subArr)
//   }

//   return chunk
// }

// function chunk(array, size) {
//   let chunk = []
//   let i = 0

//   while (i < array.length) {
//     let subArr = array.slice(i, i + size)
//     chunk.push(subArr)
//     i += size
//   }

//   return chunk
// }

// function chunk(array, size) {
//   let chunk = []
//   let i = 0

//   while (i < array.length) {
//     let subarr = array.slice(i, i + size)
//     chunk.push(subarr)
//     i += size
//   }

//   return chunk
// }

// function chunk(array, size) {
//   let chunk = []
//   let i = 0

//   while (i < array.length) {
//     let subarr = array.slice(i, i + size)
//     chunk.push(subarr)
//     i += size
//   }

//   return chunk
// }

// function chunk(array, size) {
//   let chunk = [];
//   let i = 0

//   while (i < array.length) {
//       let subArr = array.slice(i, i + size)
//       chunk.push(subArr)
//       i += size
//   }

//   return chunk
// }

// function chunk(array, size) {
//   const chunk = []

//   while (array.length > 0) {
//     chunk.push(array.splice(0, size))
//   }

//   return chunk
// }

module.exports = chunk;

// function chunk(array, size) {
//   const chunk = []
//   let i = 0;

//   while (i < array.length) {
//     chunk.push(array.slice(i, i + size))
//     i += size;
//   }
//   return chunk;
// }

// function chunk(array, size) {
//   const chunkedArr = []

//   while (array.length) {
//     let subArr = array.splice(0, size)
//     chunkedArr.push(subArr)
//   }
//   return chunkedArr
// }

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element)
//     }
//   }
//   return chunked
// }
