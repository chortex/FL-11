function pipe(x, ...array) {
  for (let index = 0; index < array.length; index++) {
    let value = array[index](x);
    x = value;
  }
  return x;
}


function addOne(value) {
  return value + 1;
}

pipe(1, addOne, addOne);
