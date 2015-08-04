
var coinValues = [10000, 5000, 2000, 1000, 500, 100, 25, 10, 5, 1];

function makeChange (amount, coinValues) {
  // Return the number of ways you can "make change" for
  // the amount given the coinValues you have
  //
  // hint: what is/are the edge case(s)?

  // First specify the edge case:
  // If the amount we have leftover is 0, then we were
  // able to make exact change and can return a value
  // of 1 (which will get added to the result variable)
  if (amount === 0) {
    return 1;
  }

  // result variable to keep track of number of ways we can make change
  var result = 0;
  // the largest coin in our coinValues array
  var largestCoinRemaining = coinValues[0];
  // the value of the largest coin deducted from our amount argument
  var subtractLargestCoin = amount - largestCoinRemaining;

  // "Left" Branch:
  // If you were able to take away one of the largest coins
  // without dropping below zero, you should attempt to make
  // change again with that value
  if (subtractLargestCoin >= 0) {
    result += makeChange(subtractLargestCoin, coinValues);
  }

  // "Right" Branch:
  // If you have more than 1 coin in your coinValues array, try
  // to make change with a set of coins that do not include the
  // largest coin you currently have
  if (coinValues.length > 1) {
    result += makeChange(amount, coinValues.slice(1));
  }

  // return the cumulative number of ways we were able to
  // make change (sum of all the 1's that were returned in
  // the recursion)
  return result;
}

console.log(    makeChange(10, coinValues)    ); // log 4

