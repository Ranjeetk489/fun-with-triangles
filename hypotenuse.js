const valueA = document.querySelector("#valueA");
const valueB = document.querySelector("#valueB");
const calculate = document.querySelector("#calHyp");
const answer = document.querySelector("#ans");

calculate.addEventListener("click" , checkValidInput)

function checkValidInput(){
if(valueA.value > 0 && valueB.value >0){
    calculateHypotenuse(valueA, valueB)
    }
else{
    answer.innerText = "Input needs to be a Valid Input and both inputs must be greater than 0 ";
    }
}

function calculateHypotenuse(valueA, valueB){
    const hypotenuse  = Math.trunc(Math.sqrt(valueA.value*valueA.value + valueB.value*valueB.value));
    
    answer.innerText = hypotenuse;
}