

const fileInput = document.getElementById("fileInput")
const audioElement = document.getElementById("audio")



fileInput.addEventListener("change", function() {
    const file = this.files[0]
    if (file) {
        const objectURL = URL.createObjectURL(file)
        audioElement.src = objectURL
    }
})