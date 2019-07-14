function reverseNumber(value) {
  if (value % 1 === 0) {
    let result = 0;
    let sign = Math.sign(value);
    value = Math.abs(value);
    while (value) {
      result *= 10;
      result += value % 10;
      value = Math.floor(value / 10);
    }
    return result * sign;
  } else {
    return 'Invalid input data';
  }
}

reverseNumber(123);