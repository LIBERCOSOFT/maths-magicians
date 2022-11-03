import operate from '../../logic/operate';

test('return the sum of two numbers', () => {
  const response = operate(2, 2, '+');
  expect(response).toBe('4');
});

test('return the multiplication of two numbers', () => {
  const response = operate(4, 4, 'x');
  expect(response).toBe('16');
});

test('return the division of two numbers', () => {
  const response = operate(4, 2, '÷');
  expect(response).toBe('2');
});

test('return the substraction of two numbers', () => {
  const response = operate(4, 2, '-');
  expect(response).toBe('2');
});

test('return the modulo of two numbers', () => {
  const response = operate(9, 3, '%');
  expect(response).toBe('0');
});

test('return error on unknown operator', () => {
  expect(() => operate(9, 3, '%-')).toThrow("Unknown operation '%-'");
});
