const form = document.querySelector("form");

form.addEventListener('submit',function (e) {
    e.preventDefault();

    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);

    let results = document.querySelector(".results");

    if (height < 0 || height === "" || isNaN(height)  ) {
        results.innerHTML = `Please Enter Valid Height ${height}`;
    }
    else if (weight < 0 || weight === "" || isNaN(weight)  ) {
        results.innerHTML = `Please Enter Valid Height ${weight}`;  
    }
    else{
        const BMI = (weight / ((height * height)/10000)).toFixed(2);
        results.innerHTML = `${BMI}`
    }
    
})