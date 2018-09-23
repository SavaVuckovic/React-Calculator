import operate from './operate';

export default function calculate(calcData, btnName) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['%', '+', '-', '×', '÷'];
  let { total, next, operation } = calcData;

  if (numbers.includes(btnName)) {
    next = next === null ? btnName : next + btnName;
  } else if (operators.includes(btnName)) {
    operation = btnName;
  } else if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  }

  return { total, next, operation };
}