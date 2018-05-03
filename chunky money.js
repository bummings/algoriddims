// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  
  var results = [];
  while (arr.length) {
    results.push(arr.splice(0, size));
  }
  return results;
}

chunkArrayInGroups(["a", "b", "cuz", "d", 'e', 'f', 'g'], 2);
