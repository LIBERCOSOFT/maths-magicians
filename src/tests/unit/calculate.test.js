import calculate from '../../logic/calculate';

test('return the sum of two numbers', () => {
  const sampleObj = {
    total: 2,
    next: 2,
    operation: '+',
  };
  const { total, next, operation } = sampleObj;
  const response = calculate({ total, next, operation }, '=');
  expect(response.total).toBe('4');
});

test('return the substraction of two numbers', () => {
  const sampleObj = {
    total: 2,
    next: 2,
    operation: '-',
  };
  const { total, next, operation } = sampleObj;
  const response = calculate({ total, next, operation }, '=');
  expect(response.total).toBe('0');
});

test('return the multiplication of two numbers', () => {
  const sampleObj = {
    total: 2,
    next: 2,
    operation: 'x',
  };
  const { total, next, operation } = sampleObj;
  const response = calculate({ total, next, operation }, '=');
  expect(response.total).toBe('4');
});

test('return the division of two numbers', () => {
  const sampleObj = {
    total: 2,
    next: 2,
    operation: '÷',
  };
  const { total, next, operation } = sampleObj;
  const response = calculate({ total, next, operation }, '=');
  expect(response.total).toBe('1');
});

test('return the modulo of two numbers', () => {
  const sampleObj = {
    total: 4,
    next: 2,
    operation: '%',
  };
  const { total, next, operation } = sampleObj;
  const response = calculate({ total, next, operation }, '=');
  expect(response.total).toBe('0');
});

test('return the an empty state when AC button is clicked', () => {
  const sampleObj = {
    total: 4,
    next: 2,
    operation: '%',
  };
  const { total, next, operation } = sampleObj;
  const response = calculate({ total, next, operation }, 'AC');
  expect(response.total).toBe(0);
  expect(response.next).toBe(null);
  expect(response.operation).toBe(null);
});

test('return the nagative of numbers', () => {
  const sampleObj = {
    total: -4,
    next: null,
    operation: null,
  };
  const { total, next, operation } = sampleObj;
  const response = calculate({ total, next, operation }, '+/-');
  expect(response.total).toBe('4');
});
