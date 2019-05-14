function palindrome(str) {
  //Convert String to Array
  let arr = str.split("");
  //Determine if Array is even
  if (arr.length % 2 === 0) {
    //even
    let frontEven = 0;
    let backEven = (arr.length) - 1;
    for (let i = 0; i<arr.length/2; i++){
      console.log("frontEven " + frontEven);
      console.log("backEven " + backEven);
      console.log("i: " + i);
      frontEven += 1;
      backEven -= 1;
    }
  } else {
    let frontOdd= 0;
    let backOdd = (arr.length) - 1;
    for (let i = 0; i<arr.length/2; i++){
      console.log("frontOdd " + frontOdd);
      console.log("backOdd " + backOdd);
      console.log("i: " + i);
      frontOdd += 1;
      backOdd -= 1;
    }
  }
  //create loop to test first and last, next...
  //same for odd case
  //return true or false
  return true;
}



palindrome("eye");
