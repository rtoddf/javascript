// DEF:
// forms a new array by calling the function passed into it as an argument,
// on each and every element of the Array.
// It will map each of the return values of the callback and create a new array.

//Example 1
// Given an array of integers, create a new array in which the double of each integer in the first array is stored,
// and log it to the console.

const numbers = [477, 8914, 40461, 599148];

const doubles = numbers.map((num) => num * 2);
console.log('doubles: ', doubles);

//Example 2
// Given an array of singular nouns, create a new array that stores the plural
// noun of each of the words in the first array, and log it to the console
//(assume that the singular nouns can be made plural by adding a 's').
const words = ['pen', 'book', 'code'];
const plurals = words.map((word) => word + 's');
console.log('plurals: ', plurals);
