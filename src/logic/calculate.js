import operate from './operate';

export default function calculate(calcData, btnName) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['%', '+', '-', '×', '÷'];
  let { total, next, operation } = calcData;

  if (numbers.includes(btnName)) {
    // total is empty
    if (!total) {
      total = ''
      total += btnName;
    }
    // no operator
    else if (!operation && total) {
      total += btnName;
    }
    // both operation and total present but not next
    else if (operation && total && !next) {
      next = '';
      next += btnName;
    }
    // -||- but next is also there
    else if (operation && total && next) {
      next += btnName;
    }


  } else if (operators.includes(btnName)) {
    if (operation === null) {
      operation = btnName;
    } else {
      /// PERFORM OPERATION ON TOTAL
      operation = null
    }
  } else if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (btnName === '=') {
    if (total) {
      const result = operate(Number(total), next, operation);
      total = String(result);
    } else {
      total = operate(0, next, operation);
    }
  } else if (btnName === '.') {

  }

  return { total, next, operation };
}