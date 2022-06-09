var fruits = [
  {
    id: 1,
    name: "Banana",
    color: "Yellow",
  },
  {
    id: 2,
    name: "Apple",
    color: "Red",
  },
];

// Params 'listOfFruits' indicates defined array called fruits
// params 'fruitName' indicates name of the fruit to be searched
function searchByName(listOfFruits, fruitName) {
  for (var i in listOfFruits) {
    if (listOfFruits[i].name.toUpperCase() === fruitName.toUpperCase()) {
      return listOfFruits[i];
    }
  }
  return "Fruits not found !!!";
}

// Params 'listOfFruits' indicates defined array called fruits
// params 'fruitName' indicates name of the fruit to be searched
// params 'property' indicates the property(key) of the fruits array
function searchByKey(listOfFruits, property, fruitName) {
  for (var i in listOfFruits) {
    var value = listOfFruits[i][property];
    if (value.toLowerCase() === fruitName.toLowerCase()) {
      return listOfFruits[i];
    }
  }
  return "Fruit Not Found !!!";
}

console.log(searchByName(fruits, "apple"));
console.log(searchByKey(fruits, "name", "BaNaNA"));
