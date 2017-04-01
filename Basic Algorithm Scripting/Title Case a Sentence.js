//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  var array1 = str.split(" ");
  var array2 = [];
  for (var i = 0; i < array1.length; i++){
    array2.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1).toLowerCase());
  }
  array2 = array2.join(" ");
  return array2;
}

titleCase("I'm a little tea pot");