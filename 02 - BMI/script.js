

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value)
    const height = parseFloat(document.getElementById("height").value) / 100
     


    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2)
        document.getElementById("result").textContent = `Tu BMI es: ${bmi}`
    } else {
        document.getElementById("result").style.color = 'red'
        document.getElementById("result").textContent = "Por favor, introduce valores validos."
    }

}