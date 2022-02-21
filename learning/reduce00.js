// DEF:
// The reduce() method creates a new array, executing the callback passed into it on every element, and outputs a single value. It does something on every element and keeps a record of the calculations in an accumulator variable and when no more elements are left, it returns the accumulator.

// The reduce() function itself takes two inputs: (a) the reducer function or callback; (b) an optional starting point or initialValue.

// The reducer function or the callback accepts 4 arguments: accumulator, currentItem, index, array.

// If the optional initialValue is given, the accumulator at the first iteration will be equal to the initialValue and the currentItem will be equal to the first element in the array. Otherwise, the accumulator would be equal to the first item in the input array, and the currentItem will be equal to the second item in the array.

// Example 1:
// Given an array of numbers, find the sum of every element in the array, and log it to the console.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log('sum: ', sum);

// Example 2
// Given an array of numbers, find the average of them, and log it to the console.
const integers = [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8];
const average = integers.reduce((avg, int) => avg + int, 0) / integers.length;
console.log('average: ', average);
