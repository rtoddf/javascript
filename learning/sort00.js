// DEF:
// The sort method is self-explanatory: it "sorts" an array in place and returns a sorted the array. The default sort order is ascending.

// Note the words "in place". It means that the original array is changed and the same reference to the array is returned. So, originalArray===newArray, if nothing is sorted.
// Example 1
// Given an array of numbers, sort the array by ascending order and log the sorted array to the console.
const nums = [4, 5, 2, 1, 3];
const sorted = nums.sort((a, b) => a - b);
// or even shorter
// const sorted = nums.sort();
console.log('sorted: ', sorted);
// Example 2
// Given an array of contacts, sort them in alphabetical order by name, and log the sorted array.
const contacts = [
  { name: 'Todd Fleeman', phone: 1234567890 },
  { name: 'Lori Mayer', phone: 4894759371 },
  { name: 'Yosha Gamuda', phone: 1234567890 },
  { name: 'Portia Umeng', phone: 4894759371 },
];
const alphaByName = contacts.sort((contactA, contactB) => {
  const name1 = contactA.name;
  const name2 = contactB.name;
  return name1 < name2 ? -1 : name1 > name2 ? 1 : 0;
});
console.log('alphaByName: ', alphaByName);
