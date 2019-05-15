function palindrome(str){
  //Convert String to Lower case
  let newStr = str.toLowerCase();
  //Remove non-alphanumeric
  newStr = newStr.replace(/[^a-z^0-9]/g, "");
  //Convert string to array
  let arr = newStr.split("");
  let front = 0;
  let back = (arr.length) - 1;
  //Determine if Array is even
  if (arr.length % 2 === 0) {
    //even
    //compare element by element
    for (let i = 0; i<arr.length/2; i++){
      let frontTemp = arr[front];
      let backTemp = arr[back];
      //determine matches
      if (frontTemp === backTemp){

      } else {
        //is not a palindrome, exit loop
        output.innerHTML = str + '<span style="color:red">' + " is not" + '<span style="color:black">' + " a palindrome";
        return false;
      }
      front += 1;
      back -= 1;
    }
    output.innerHTML = str + '<span style="color:green">' + " is" + '<span style="color:black">' + " a palindrome";
    return true;
  } else {
    //odd
    //repeat steps for odd case
    //modify math for odd case
    for (let i = 0; i<arr.length/2; i++){
      let frontTemp = arr[front];
      let backTemp = arr[back];
       if (frontTemp === backTemp){
      } else {
        output.innerHTML = str + '<span style="color:red">' + " is not" + '<span style="color:black">' + " a palindrome";
        return false;
      }
      front += 1;
      back -= 1;
    }
    output.innerHTML = str + '<span style="color:green">' + " is" + '<span style="color:black">' + " a palindrome";
    return true;
}
}


function aquire(){
const userInput = document.querySelector("#user_input").value;
console.log(userInput);
const output = document.querySelector("#output");
palindrome(userInput);
}