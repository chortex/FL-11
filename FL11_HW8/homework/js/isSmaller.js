function isBigger(x, y) {
  return x > y;
}

function isSmaller(x, y) {
  return isBigger(y, x);
}

isSmaller(3, 5);
