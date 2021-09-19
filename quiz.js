const quizForm = document.querySelector(".form");
const subBtn = document.querySelector("#subBtn");
const output =  document.querySelector("#output")

const correctAnswers = ["Midsegment" , "75°"];

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
 
subBtn.addEventListener("click", calculateScore);