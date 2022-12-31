let list = ['A', 'B', 'A', 'C', 'B'];

function removeDupes(list) {
  let noDupes = [];
  let listMap = {};

  //create a map
  for (let element of list) {
    listMap[element] ? listMap[element]++ : listMap[element] = 1;
  }

  //run through the map to grab the keys
  for (let key in listMap) {
    noDupes.push(key);
  }

  return noDupes;
}


console.log(removeDupes(list));