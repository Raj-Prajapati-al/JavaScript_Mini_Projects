
const randomColor = function () {
    let hexCode = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
         color += hexCode[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId;

const startChangingColor = function () {
    function changecolor() {
        
        document.body.style.backgroundColor = randomColor();
    }
   intervalId = setInterval(changecolor,2000);
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById("start").addEventListener("click",startChangingColor);

document.getElementById("stop").addEventListener("click",stopChangingColor)