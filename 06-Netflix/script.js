const loginForm = document.getElementById("login-form")
const successMessage = document.getElementById("sucess-message")



loginForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value


    if (username === 'pepito' && password === 'pepe') {
        successMessage.style.display = "block";
        successMessage.textContent = 'Login Exitoso';
    } else {
        alert('Usuario o password incorrectos')
    }


})