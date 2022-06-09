var numbers = [1, 2, 3, 4];

// params 'collection' array defined as numbers
// params 'tranFunc' is a function passed as parameter -->function(num)
function transform(collection, tranFunc) {
  result = [];
  for (i in collection) {
    result.push(tranFunc(collection[i]));
  }
  return result;
}

// params 'numbers' array defined as numbers
// params second paramater is a function which returns double
var output = transform(numbers, function (num) {
  return num * 2;
});

console.log(output);
