DEF:
// The filter() function is what you'd use if you're creating a search bar from a given list of items, 
// for example. The filter() method also creates a new array by executing the passed callback on every element 
// of the array, and keeps it in the resulting array IF and ONLY IF the element 
// passes the Boolean test returned by the callback.

// The callback passed into the filter() method accepts any of the three arguments: item, index and array; 

// doesn't change the existing array

const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
]

const under100 = items.filter(item => item.price <= 100)

console.log('under100: ', under100)

