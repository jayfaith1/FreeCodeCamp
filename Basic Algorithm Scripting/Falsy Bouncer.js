//Remove all falsy values from an array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) {
  var value = [];
  arr.forEach(function(items){
    if(items){
      value.push(items);
    }
  });
  return value;
}

bouncer([7, "ate", "", false, 9]);