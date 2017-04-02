//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  
  var chunkyArray = [];
  var count = 0;
  arr.forEach(function(){
    if (count<arr.length) {
      chunkyArray.push(arr.slice(count, count+size));
      count= count+size;
    }
  });
  return chunkyArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);