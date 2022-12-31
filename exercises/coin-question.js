const amount = 2.66

function changeMaker(amount) {
  let coins = [.25, .10, .05, .01];
  let change = [];

  for (let i = 0; i < coins.length; i++) {
    change.push(Math.floor(amount / coins[i]))
    amount = amount % coins[i]
  }
  return change
}

console.log(changeMaker(amount))