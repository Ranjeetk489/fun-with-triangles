const quizForm = document.querySelector(".form");
const subBtn = document.querySelector("#subBtn");
const output =  document.querySelector("#output")
output.style.display = "none";
const correctAnswers = ["Midsegment" , "75°", "scalene","isosceles triangle","right angle triangle"];

function calculateScore(){
    let score = 0;
    let index  = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
        score = score + 1;
    }
    index = index + 1;
}

output.innerText = "Your score is " + score;
}
 
function showOutput(){
    output.style.display = "block";
    output.style.color = "green";
}

subBtn.addEventListener("click", calculateScore);
subBtn.addEventListener("click", showOutput);