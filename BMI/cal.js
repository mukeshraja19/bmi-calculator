window.onload = () => {
    let button = document.querySelector(".cal");
    button.addEventListener("click", calculateBMI);
    };
    function calculateBMI() {
    let height = parseInt(document
            .querySelector(".Heightcal").value);
    let weight = parseInt(document
            .querySelector(".Weightcal").value);
    let result = document.querySelector(".result");
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
    
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
    
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
    