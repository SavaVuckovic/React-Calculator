import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  let result;

  switch (operation) {
    case 'add':
      result = numOne.plus(numTwo);
      break;
    case 'subtract':
      result = numOne.minus(numTwo);
      break;
    case 'multiply':
      result = numOne.times(numTwo);
      break;
    case 'divide':
      result = numOne.div(numTwo);
      break;
    default:
      throw new Error('Invalid operation.');
  }

  return result.c[0];
}