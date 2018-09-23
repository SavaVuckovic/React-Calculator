import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);

  switch (operation) {
    case 'add':
      return numOne.plus(numTwo).c[0];
  }
}