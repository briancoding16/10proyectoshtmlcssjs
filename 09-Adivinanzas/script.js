const riddles = [
    {
        question: "Se mira pero no se toca. ¿Qué es?",
        answer: "espejo"
    },


    {
        question: "Blanco por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué es?",
        answer: "pera"
    },

    {
        question: "¿Qué tiene llaves pero no abre puertas?",
        answer: "piano"
    },
]


let currentRiddle;
let correctAnswer = 0;

function loadNewRiddle() {
    currentRiddle = riddles[Math.floor(Math.random() * riddles.length )]
    document.getElementById("riddle").innerText = currentRiddle.question
}

document.addEventListener("DOMContentLoaded", function() {
    loadNewRiddle()
})


function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.toLowerCase()

    if(userAnswer === currentRiddle.answer) {
        document.getElementById('result').innerText = '¡Correcto!'
        document.getElementById('result').style.color = 'green'
        correctAnswer++;
        document.getElementById("correctCount").innerText = correctAnswer

        loadNewRiddle()

    } else {
        document.getElementById('result').innerText = '¡Intentalo de nuevo!'
        document.getElementById('result').style.color = 'red'
    }
}