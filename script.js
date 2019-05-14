function palindrome(str) {
  //Convert String to Lower case
  let newStr = str.toLowerCase();
  //Remove non-alphanumeric
  newStr = newStr.replace(/[^a-z^0-9]/g, "");
  //Convert string to array
  let arr = newStr.split("");
  //Determine if Array is even
  if (arr.length % 2 === 0) {
    //even
    let frontEven = 0;
    let backEven = (arr.length) - 1;
    //compare element by element
    for (let i = 0; i<arr.length/2; i++){
      let frontTemp = arr[frontEven];
      let backTemp = arr[backEven];
      //determine matches
      if (frontTemp === backTemp){
        console.log (frontTemp + " = " + backTemp);
        console.log(true);
      } else {
        console.log(frontTemp + " != " + backTemp);
        console.log(false);
        //is not a palindrome, exit loop
        return false;
      }
      frontEven += 1;
      backEven -= 1;
    }
    return true
  } else {
    //odd
    //repeat steps for odd case
    let frontOdd= 0;
    let backOdd = (arr.length) - 1;
    //modify math for odd case
    for (let i = 0; i<arr.length/2; i++){
      let frontTemp = arr[frontOdd];
      let backTemp = arr[backOdd];
       if (frontTemp === backTemp){
        console.log (frontTemp + " = " + backTemp);
        console.log(true);
      } else {
        console.log(frontTemp + " != " + backTemp);
        console.log(false);
        return false;
      }
      frontOdd += 1;
      backOdd -= 1;
    }
    return true
}
}


palindrome("A man, A plan, a canal. Panama");