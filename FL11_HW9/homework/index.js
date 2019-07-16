// task 0
function getNumbers(string) {
  let numbers = [];
  for (let i = 0; i < string.length; i++) {
    let number = parseInt(string[i]);
    if (number) {
      numbers.push(number);
    }
  }
  return numbers;
}
// getNumbers('asd23fg.4');

// task 1
function findTypes() {
  let values = {};
  for (let i = 0; i < arguments.length; i++) {
    let types = typeof arguments[i];
    if (values[types]) {
      values[types] += 1;
    } else {
      values[types] = 1;
    }
  }
  return values;
}
// findTypes(null, "asd", 123, true);

// task 2
function executeforEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}
// executeforEach([114, 322, 56, 877, 5], item => console.log(item));

// task 3
function mapArray(array, func) {
  let transformArray = [];
  executeforEach(array, function(el) {
    transformArray.push(func(el));
  });
  return transformArray;
}
// mapArray([2, 5, 8], el => (el + 3));

// task 4
function filterArray(array, func) {
  let filterAr = [];
  executeforEach(array, function(el) {
    if (func(el)) {
      filterAr.push(el)
    }
  });
  return filterAr;
}
// filterArray([2, 3, 5, 6, 9], el => el > 3);

// task 5
function showFormattedDate(date) {
  const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return 'Date: ' + date.getDate() + ' ' + Month[date.getMonth()] + ' ' + date.getFullYear();
}
// showFormattedDate(new Date('2019-01-27T01:10:00'));

// task 6
function canConvertToDate(date) {
  return !isNaN(Date.parse(date));
}
// canConvertToDate('2016-03-18T00:00:00');

// task 7
function daysBetween(firstDate, secondDate) {
  const date = {days: 24, hours: 60, minutes: 60, seconds: 1000};
  let difference = Math.abs(firstDate - secondDate);
  difference = difference / (date.days * date.hours * date.minutes * date.seconds);
  return Math.round(difference);
}
// daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

// task 8
const inputData = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];
function getAmountOfAdultPeople(data) {
  const days = 365;
  const years = 18;
  return filterArray(data, function (el) {
    if (daysBetween(Date.now(), new Date(el[' birthday '])) > days * years) {
      return true;
    }
  }).length;
}
// getAmountOfAdultPeople (inputData);

// task 9
function keys(object) {
  let keysArray = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keysArray.push(key);
    }
  }
  return keysArray;
}
// keys({keyOne: 1, keyTwo: 2, keyTree: 3});

// task 10
function values(object) {
  let valuesArray = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      valuesArray.push(object[key]);
    }
  }
  return valuesArray;
}
// values({keyOne: 1, keyTwo: 2, keyTree: 3});
