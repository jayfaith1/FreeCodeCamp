//Return the length of the longest word in the provided sentence.

/Your response should be a number.

function findLongestWord(str) {
  var strToArray = str.split(" ");
  var lengthOfStr = 0;
  for (var i = 0; i < strToArray.length; i++){
    if (strToArray[i].length > lengthOfStr){
      //Set lengthOfStr value to current strToArray length
      lengthOfStr = strToArray[i].length;
    }
  }
  return lengthOfStr;
}

findLongestWord("The quick brown fox jumped over the lazy dog");