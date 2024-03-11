// java script code for calculator

const display = document.getElementById("display");
function appendToDiplay(input){
  display.value += input;
}

function clearDisplay(){
    display.value ="";

}

function Caculate(){
    display.value = eval(display.value);

}

