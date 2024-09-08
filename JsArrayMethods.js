let numbers = [1, 2, 3, 4, 5, 6];
console.log(`Original array: ${numbers}`);

// double each number using map()
const doubled = numbers.map((element) => element * 2);
console.log(`Numbers multiply by 2 ->`, doubled);

// filter out even numbers
const oddNumbers = numbers.filter((element) => element % 2 === 1);
const evenNumbers = numbers.filter((element) => element % 2 === 0);
console.log(`ODD Numbers: ${oddNumbers} \nEven numbers: ${evenNumbers}`)

// Find the first number greater than 4
const greaterThanFour = numbers.find(num => num > 4);
console.log("First number greater than 4:", greaterThanFour);

// Sum all numbers by using reduce()
const sumAllNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all numbers in the array numbers:", sumAllNumbers);