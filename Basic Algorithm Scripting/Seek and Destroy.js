//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  var args = [].slice.call(arguments);
  args.splice(0,1);
  
  for(var i = 0; i < arr.length; i++){
    for (var x = 0; x < args.length; x++){
      if (arr[i]==args[x]){
        delete arr[i];
      }
    }
  }
  return arr.filter(nofalse);
}
function nofalse(value){
  return Boolean(value);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
