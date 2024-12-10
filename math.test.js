const { multiply } = require('./math.js');

test('base test', () => {
  expect(1 + 1).toBe(2);
});

test('multiply two positives', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('multiply negative and positive', () => {
  expect(multiply(-1, 1)).toBe(-1);
});

test('multiply two negative numbers', () => {
  expect(multiply(-5, -10)).toBe(50);
});

test('multiply decimal and whole', () => {
  expect(multiply(.5, 20)).toBe(10);
});

test('multiply by 0', () => {
  expect(multiply(12, 0)).toBe(0);
});

test('string passed in for first number', () => {
  expect(multiply("2", 4)).toBe(8);
});

test('string passed in for second number', () => {
  expect(multiply(5, "6")).toBe(30);
});

test('incorrect data type for num1', () => {
  expect(multiply([1, 2, 3, 4], 6)).toBe(0);
});

test('more than two numbers as arguments', () => {
  expect(multiply(2, 3, 4)).toBe(6);
});

test('no numbers as arguments', () => {
  expect(multiply()).toBe(0);
});

test('the second argument is null or undefined', () => {
  expect(multiply(76)).toBe(0);
});