const { TestWatcher } = require('jest');
const sum  = require('./sum');

// 1 + 2 == 3
test('properly adds two numbers', () => {
    expect(
        sum(1, 2)
    ).toBe(3)
})