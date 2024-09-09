let numbers = [1, 2, 3, 4, 5, 6];
console.log(`Original array: ${numbers}`);

// double each number using map()
const doubled = numbers.map(number => number * 2);
console.log(`Double of each number is: ${doubled}`);

/**Imperative  even numbers*/
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(`evenNumbers: ${evenNumbers}`);

/**Imperative  odd numbers*/
const oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    oddNumbers.push(numbers[i])
  }
}
console.log(`oddNumbers: ${oddNumbers}`);

// Find the first number greater than 4
const greaterThenFour = numbers.find(number => number > 4)
console.log(`First number greater than 4: ${greaterThenFour}`);

// Sum all numbers by using reduce()
const sumAllNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of all number in the array numbers: ${sumAllNumbers}`);