
function sum (array) {
  // Find the sum of this array using recursion
  // hint: you may want to use the array method "slice"

  // First, specify the edge case
  if (array.length === 0) {
    return 0;
  }

  // Split the array into a head and tail
  var head = array[0];
  var tail = array.slice(1);

  // Ask for the sum recursively
  return head + sum(tail);
}

var result = sum([2,4,6,8]); // result = 20;
console.log(result);

