let a = Number(prompt('Enter length of side a:', ''));
let b = Number(prompt('Enter length of side b:', ''));
let c = Number(prompt('Enter length of side c:', ''));
let result;

if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
      result = 'Equivalent Triangle';
    } else if (a === b || b === c || a === c) {
      result = 'Isosceles Triangle';
    } else {
      result = 'Normal Triangle';
    }
  } else {
    result = 'Triangle doesn’t exist';
  }
} else {
  result = 'Invalid Input Data';
}

console.log(result);
