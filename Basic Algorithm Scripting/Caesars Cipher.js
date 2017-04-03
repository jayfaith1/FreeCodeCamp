//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) { // LBH QVQ VG!
  var abcArr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
  var decodedArr = [];
  var newArr = str.split("");
  newArr.forEach(function (x){
    if(abcArr.indexOf(x) ===-1){
      decodedArr.push(x);
    }
    else{
      for(var i = 0; i<abcArr.length;i++){
        if(x === abcArr[i]){
          decodedArr.push(abcArr[i+13]);
        }
      }
    }
  });
  return decodedArr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");