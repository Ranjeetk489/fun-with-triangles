const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calAr");
const answer = document.querySelector("#ansA");
calculate.addEventListener("click", showArea);

function showArea(){
    if(base.value>0 && height.value>0){
    calculateArea(base,height);
    }
    else{
        answer.innerText = "value of Base or Height can't be zero, provide valid Input";
    }
}

   
function calculateArea(base, height){
    const area = 0.5 * base.value * height.value;
    console.log(area);
    answer.innerText = area;
}