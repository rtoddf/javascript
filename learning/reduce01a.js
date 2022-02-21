const items = [
    {name: 'Rice', price: 5},
    {name: 'Book', price: 20},
    {name: 'Chicken', price: 100},
    {name: 'Monitor', price: 100},
]

// foreach example
// let totalPrice = 0;
// items.forEach(item => {
//     totalPrice += item.price
// })

// reduce takes two parameters - a function and the starting point
// takes in two things - accumulator and the item we're reducing
const totalPrice = items.reduce((total, item) => {
    // total starts at starting point each iteration and the new returned value from the previous iteration
    // console.log(`total: ${total}`)
    // console.log(`price: ${item.price}`)
    return total + item.price;
}, 0);

console.log(`totalPrice: ${totalPrice}`)

const people = [
    {name: 'Kyle', age: 26},
    {name: 'John', age: 21},
    {name: 'Sally', age: 42},
    {name: 'Jill', age: 42},
]

// group by age
const groupByAge = people.reduce((gp, person) => {
    const age = person.age
    // chel to see if there's an array of people at the current iterated age. if not, create a new arry
    if (gp[age] == null) gp[age] = [];
    // push that person to the new array
    gp[age].push(person);
    return gp;
}, {});

console.log('groupByAge: ', groupByAge)

// intricacies of reduce
const numbers = [13, 2, 5];

const sum = numbers.reduce((total, number) => {
    return total + number
}, 0)

console.log('sum: ', sum)

// reduce takes four parameters - accumulator, item, iterator, and the array
// if you don't use a staring point, the first iteration IS the starting point
// it skips the first iteration of the loop