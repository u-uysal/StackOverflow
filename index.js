let fruits = ["apples", "oranges", "grapes", "bananas"];

function removeFlavorByName(arr, string) {
  let newArray = arr.filter((item) => item !== string);
  return newArray;
}

console.log(removeFlavorByName(fruits, "apples"));
