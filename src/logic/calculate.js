import operate from './operate';

export default function calculate(calcData, btnName) {
  let { total, next, operation } = calcData;

  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    // case '.':
    //   break;
    // case '=':
    //   break;
    case '%':
    case '+':
    case '-':
    case '×':
    case '÷':
      total = operate(total, next, operation);
      break;
    default:
      throw new Error('Invalid button name.');
  }

  return { total, next, operation };
}