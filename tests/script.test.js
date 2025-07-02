const { formatPhoneNumber } = require('../script.js');

test('formatPhoneNumber formats a numeric string correctly', () => {
  const input = { value: '1234567890' };
  formatPhoneNumber(input);
  expect(input.value).toBe('(123) 456-7890');
});
