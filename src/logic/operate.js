import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = numOne.plus(numTwo);
      break;
    case '-':
      result = numOne.minus(numTwo);
      break;
    case '×':
      result = numOne.times(numTwo);
      break;
    case '÷':
      result = numOne.div(numTwo);
      break;
    default:
      throw new Error('Invalid operation.');
  }

  return result.valueOf();
}