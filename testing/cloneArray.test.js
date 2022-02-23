const { TestWatcher } = require('jest');
const cloneArray = require('./cloneArray');

test('properly clones array', () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toEqual(array);
    // to make sure the cloneArray is making a copy, not just the exact same array
    // check out pass by reference and pass by value for more explanation
    expect(cloneArray(array)).not.toBe(array);
})