const countLengthOfCycle = require('./index');

test('countLengthOfCycle function exists', () => {
  expect(typeof countLengthOfCycle).toEqual('function');
});

test('[1, 2], 0 to not have a cycle', () => {
  expect(countLengthOfCycle([1, 2], 0)).toBeFalsy();
});

test('[1, 0], 0 is equal to 2', () => {
  expect(countLengthOfCycle([1, 0], 0)).toEqual(2);
});

test('[1, 2, 0], 0 is equal to 3', () => {
  expect(countLengthOfCycle([1, 2, 0], 0)).toEqual(3);
});

test('[1, 2, 3, 1], 0 is equal to 3', () => {
  expect(countLengthOfCycle([1, 2, 3, 1], 0)).toEqual(3);
});

test('[1, 2, 3, 4, 1], 2 is equal to 3', () => {
  expect(countLengthOfCycle([1, 2, 3, 4, 1], 2)).toEqual(4);
});
