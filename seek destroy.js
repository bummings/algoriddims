// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) { 
  for (var x = arguments.length - 1; x >= 1; x--) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arguments[x] == arr[i]) {
        arr.splice(i, 1);
      }
  }
}
  return arr;  	
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
