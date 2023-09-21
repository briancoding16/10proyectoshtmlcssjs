const rRange = document.getElementById("rRange")
const gRange = document.getElementById("gRange")
const bRange = document.getElementById("bRange")
const colorDisplay = document.getElementById("colorDisplay")
const rgbValue = document.getElementById("rgbValue")

function updateColor () {
    const r = rRange.value;
    const g = gRange.value;
    const b = bRange.value;


    const rgbStr = `RGB(${r}, ${g}, ${b})`;
    colorDisplay.style.backgroundColor = rgbStr
    rgbValue.textContent = rgbStr
}


rRange.addEventListener("input", updateColor)
gRange.addEventListener("input", updateColor)
bRange.addEventListener("input", updateColor)





const copyButton = document.getElementById("copyButton")


copyButton.addEventListener(("click"), ()=> {
    navigator.clipboard.writeText(rgbValue.textContent)
    .then(()=> {
        alert('Color copiado al portapapeles!')
    })

    .catch(err => {
        console.log('Error al copiar el texto', err)
        alert('No se pudo copiar el error')
    })
})


updateColor()