const calculadora = require('./index');

test('O resultado da soma está ok', () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test('O resultado da subtração está ok', () => {
  expect(calculadora.subtrair(4, 2)).toBe(2);
});

test('O resultado da soma está ok', () => {
  expect(calculadora.dividir(10, 2)).toBe(5);
});

test('O resultado da soma está ok', () => {
  expect(calculadora.multiplicar(2, 3)).toBe(6);
});