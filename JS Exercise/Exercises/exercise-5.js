var arr = [
  {
    id: 2,
    name: "John",
  },
  {
    id: 1,
    name: "Mary",
  },
  {
    id: 4,
    name: "Andrew",
  },
  {
    id: 3,
    name: "Bibek",
  },
];
// cloning the original array
var arrCopy = arr.map((value) => value);

// function to compare name in ascending order
function compareName(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}
// function to compare id in ascending order
function compareid(a, b) {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
}

console.log("Sorted by name:", arrCopy.sort(compareName));
console.log("Sorted by id:", arrCopy.sort(compareid));
console.log("original array: ", arr);
