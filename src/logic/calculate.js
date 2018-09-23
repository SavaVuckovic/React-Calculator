import operate from './operate';

export default function calculate(calcData, btnName) {
  switch (btnName) {
    case '+/-':
      calcData.total *= -1;
      calcData.next *= -1;
      break;
    case '+':
      calcData.total = operate(calcData.total, calcData.next, calcData.operation);
      break;
  }

  return calcData;
}