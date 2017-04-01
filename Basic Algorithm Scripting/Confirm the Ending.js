//Check if a string (first argument, str) ends with the given target string (second argument, target).

//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
 var strToArray = str.split(" ");
  strToArray = strToArray.reverse();
  if (strToArray.length == 1){
    strToArray = strToArray[0].split("").reverse();
    if (strToArray[0].substring(0, target.length) == target) {
      return true;
    } else return false;
  }
  else if(strToArray[0].split("").reverse().join("").substring(0, target.length) === target.split("").reverse().join("")){
    return true;
  }
  else return false;
}

confirmEnding("Bastian vad", "vad");