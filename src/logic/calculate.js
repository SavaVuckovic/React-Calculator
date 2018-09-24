import operate from './operate';

export default function calculate(calcData, btnName) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', '×', '÷'];
  let { total, next, operation } = calcData;

  if (numbers.includes(btnName)) {
    if (!total) {
      total = ''
      total += btnName;
    } else if (!operation) {
      total += btnName;
    } else if (!next) {
      next = '';
      next += btnName;
    } else if (next) {
      next += btnName;
    }
  } else if (operators.includes(btnName)) {
    if (operation && next) {
      total = String(operate(Number(total), next, operation));
      next = null;
    }
    operation = btnName;
  } else if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (btnName === '%') {
    if (next) {
      next /= 100;
    } else {
      total /= 100;
    }
  } else if (btnName === '.') {
    if (next) {
      next = (next.indexOf('.') !== -1) ? next : next + '.';
    } else {
      total = (total.indexOf('.') !== -1) ? total : total + '.';
    }
  } else if (btnName === '=') {
    if (next) {
      total = total ? String(operate(Number(total), next, operation)) : operate(0, next, operation);
      next = null;
      operation = null;
    }
  }

  return { total, next, operation };
}