const summerShoppingList = ["figs", "apples", "cantaloupes"];
const fallShoppingList = summerShoppingList;
 
//if I change the first item in the list to "grapes"
fallShoppingList[0] = 'grapes';
 
//The first item in memory will change for both array lists, as we see in the console
console.log(fallShoppingList); // ["grapes", "apples", "cantaloupes"]
console.log(summerShoppingList); // ["grapes", "apples", "cantaloupes"]