function isSmaller(x, y) {
  if (x === y) {
    return false
  }
  return !isBigger();
  function isBigger() {
    return x > y;
  }
}

isSmaller(3, 5);
