//push numbers into array 
var inp = document.getElementById("arrInput");
var dispOutput = document.createElement("div");
var op = document.createElement("h1");
 op=inp.innerText;
// dispOutput.appendChild(op);



function arrget() {
  dispOutput.appendChild(op);
  return dispOutput;
}








//
var email = 'ranjith1234@gmail.com';
var evenNum = parseInt( email.match(/[0-9]+/g));
console.log(evenNum);
while(evenNum>0){
  var remainder = evenNum%10;
  if(remainder%2==0){
    console.log(remainder);
  }
  evenNum = Math.floor(evenNum/10)


}
// console.log(evenNum);
