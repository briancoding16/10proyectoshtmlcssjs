//Obtenemos elementos del DOM


const codeEditor = document.getElementById("code-editor")
const outputDiv = document.getElementById('output')
const runButton = document.getElementById("run-button")



runButton.addEventListener("click", runCode)



//Definimos funcion

function runCode () {
    const code = codeEditor.value;

    try {
        const result = eval(code)
        outputDiv.textContent = result
    } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`
    }
}