const { TestWatcher } = require('jest');
const functions = require('./functions');

test('adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy;
});

test('user should be Todd Fleeman object', () => {
  expect(functions.createUser()).toEqual({
    firstname: 'Todd',
    lastname: 'Fleeman',
  });
});

// less then or greater than
test('should be less than 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// regular expressions
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// arrays
test('admin should be in usernames', () => {
  const usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});
