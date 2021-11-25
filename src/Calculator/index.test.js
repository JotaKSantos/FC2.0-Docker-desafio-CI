const somar = require('./index');

test('O resultado da soma está ok', () => {
  expect(somar.sum(2, 2)).toBe(5);
});