const sideA = document.querySelector("#sideA");
const sideB = document.querySelector("#sideB");
const sideC = document.querySelector("#sideC");
const checkBtn = document.querySelector("#checkBtn");
const message = document.querySelector("#angRes");
message.style.display = "none";
checkBtn.addEventListener("click", clickHandler)

function clickHandler(){
    const A = parseInt(sideA.value);
    const B = parseInt(sideB.value);  
    const C = parseInt(sideC.value);
    isTriagle(A,B,C);
}

function isTriagle(sideA , sideB, sideC){
    message.style.display = "block";
    console.log(sideA+ sideB + sideC)
    if(sideA>0 && sideB>0 && sideC>0){
        if(sideA + sideB + sideC  === 180){
            message.style.color = "blue";
            if(sideA + sideB  === 90 || sideB + sideC === 90 ||sideC + sideA === 90){
                message.innerText = "The formed triangle is a right angled triangle";
            }
            else if(sideA === 60 && sideB === 60 && sideC === 60){
                message.innerText = "The formed triangle with these angles will be a equilateral triangle"
            }
            else if(sideA > 90 || sideB > 90 || sideC > 90){
                message.innerText = "The formed triangle with these angles will be a obtuse angled triangle";
            }
            else{
                message.innerText = "Wohooo it's a triangle!"
            }
        }else{
            message.style.color = "red";
            message.innerText= "oh noo! The provided angles don't form a triangle";
        }
    }else{
        message.style.color = "red";
        message.innerText = "Invalid entry! angles can not be negative or zero"
    }
}
