
function fibonacci (n) {
  // recursively compute the nth fibonacci number

  // First specify the edge cases
  if (n === 0 || n === 1) {
    return 1;
  }

  // Ask for the sum of the previous two fibonacci numbers
  return fibonacci(n-1) + fibonacci(n-2);
}

var result = fibonacci(6); // result = 13;
console.log(result);

