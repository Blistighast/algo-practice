let people = [{name: 'Brian', sport: 'Baseball', points:27}, {name: 'Julia', sport: 'Basketball', points: 52}, {name: 'Scott', sport: 'Basketball', points: 72}, 
{name: 'greg', sport: 'Baseball', points:12}, {name: 'tom', sport: 'Baseball', points:89}, {name: 'skylar', sport: 'Baseball', points:1}]


// function pickTwo(list) {
//     let player1 = list[Math.floor(Math.random() * list.length)]
//     let player2 = list[Math.floor(Math.random() * list.length)]

//     return player1.points > player2.points ? (`${player1.name} beat ${player2.name} ${player1.points} : ${player2.points}`) : `${player2.name} beat ${player1.name} ${player2.points} : ${player1.points}`
// }

// function pickTwo(list) {
//   let randomList = list.slice();

//   let currentIndex = randomList.length

//   while (currentIndex > 0) {
//     let randomIndex = Math.floor(Math.random * currentIndex);
//     currentIndex--

//     [randomList[currentIndex], randomList[randomIndex]] = [randomList[randomIndex], randomList[currentIndex]]

//   }
//   return randomList[0].points > randomList[1].points ? (`${randomList[0].name} beat ${randomList[1].name} ${randomList[0].points} : ${randomList[1].points}`) : `${randomList[1].name} beat ${randomList[0].name} ${randomList[1].points} : ${randomList[0].points}`
// }

function pickTwo(list) {
  let randomList = list.slice()
  
  let currentIndex = randomList.length, randomIndex;

  //while there are elements to shuffle
  while (currentIndex !== 0) {
    //pick a remaining element
    randomIndex = Math.floor(Math.random * currentIndex)
    currentIndex--

    //swap it with current element
    [randomList[currentIndex], randomList[randomIndex]] = [randomList[randomIndex], randomList[currentIndex]]
  }

  return randomList[0].points > randomList[1].points ? (`${randomList[0].name} beat ${randomList[1].name} ${randomList[0].points} : ${randomList[1].points}`) : `${randomList[1].name} beat ${randomList[0].name} ${randomList[1].points} : ${randomList[0].points}`

}

console.log(pickTwo(people))
