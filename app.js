const  input = document.getElementById("input")

function reversedString(str){
const reversedString=str.split("").reverse().join("")
return reversedString
}

function checkPalindrome() {
  const value = input.value;
  const reversedInput =reversedString(value)

  if(reversedInput===value)
    alert("P A L I N D R O M E")
else{
    alert("Sorry!Not a Palindorme")
}
input.value=""
}


