const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    const weightGuide = document.querySelectorAll(".weight-guide p");
    console.log(weightGuide)

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height";
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight";
    }
    else {
        const bmi = calculateBmi(height, weight);
        if (bmi <= 18.5) {
            weightGuide[0].style.color = "pink";
            weightGuide[1].style.color = "black";
            weightGuide[2].style.color = "black";
        }
        else if (bmi > 18.5 && bmi <= 24.9) {
            weightGuide[1].style.color = "green";
            weightGuide[0].style.color = "black";
            weightGuide[2].style.color = "black";
        }
        else {
            weightGuide[2].style.color = "red"
            weightGuide[0].style.color = "black";
            weightGuide[1].style.color = "black";
        }

        result.innerHTML = bmi;
    }
});


function calculateBmi(height, weight) {
    return (weight / ((height * height) / 10000)).toFixed(2);
}