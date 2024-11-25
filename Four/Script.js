let random = parseInt(Math.random() * 100 + 1)
// console.log(random);

const form =  document.querySelector("form");
let results = document.getElementById("results");
let prev = document.getElementById("prev");
let remaining = document.getElementById("remaining");
let prevGuess = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userInput = parseInt(document.getElementById("number").value);

    if(remaining.innerText === "0")
    {
        resetGame();
    }
    else if(userInput < 1 || userInput > 100 || isNaN(userInput)) 
    {
        displayError(userInput);
    }
    else if(userInput === random)
    {
        displayResult(userInput);
    }
    else{
        results.innerText = "";
        displayPrevGuess(userInput);
        decreaseGuesses(userInput);
    }

    

})

function displayError(inValue)
{   
    if (inValue < 1 || inValue > 100 || isNaN(inValue)) 
        {
            results.innerText = `${inValue} is not a Valid Value.`;  
            resetGame();
        }
    // else if(inValue){

    // }
}

function decreaseGuesses(inValue){
    let remainingVal = remaining.innerText;
    if (remainingVal === "1") {
        resetGame();
    }
    else{
        remainingVal--;
        remaining.innerText = remainingVal;    
    }
}

function displayPrevGuess(inValue){
    prevGuess.push(inValue);
    prev.innerText = prevGuess;
}

function displayResult(inValue){
    results.innerText = `${inValue} is the Perfect Match, You won the game.`
    resetGame();
}

function resetGame(){
    results.innerHTML = `Game Over, ${random} is the correct value`;
    //  let btn =  document.getElementById("btn");
    // btn.removeAttribute("hidden");
    let userInput = document.getElementById("number");
    userInput.value = "";
    prevGuess = [];
    prev.innerText = "";
    remaining.innerText = "10"
}

// btn.addEventListener("click",(e)=>{
//     btn.style.visibility = "hidden";
// })