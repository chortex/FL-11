let a1 = Number(prompt('Enter x coordinate for A:', ''));
let a2 = Number(prompt('Enter y coordinate for A:', ''));
let b1 = Number(prompt('Enter x coordinate for B:', ''));
let b2 = Number(prompt('Enter y coordinate for B:', ''));
let c1 = Number(prompt('Enter x coordinate for C:', ''));
let c2 = Number(prompt('Enter y coordinate for C:', ''));
let result;

if (!isNaN(a1 && a2 && b1 && b2 && c1 && c2)) {
  let half = 0.5;
  let middle1 = (a1 + b1)*half;
  let middle2 = (a2 + b2)*half;
  if (middle1 === c1 && middle2 === c2) {
    result = true;
  } else {
    result = false;
  }
} else {
  result = 'Invalid Input Data';
}

console.log(result);
