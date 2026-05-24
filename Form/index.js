const validateForm = (event) => {
    event.preventDefault()

    let error = document.getElementById("error")

    let username = event.target.username
    let password = event.target.password

    if (username.value === "" && password.value === "") {
        error.innerHTML = "Following fields are empty. Enter values"
        username.style.borderColor = "red"
        password.style.borderColor = "red"
    }
    
}

const showPassword = (event) => {
    let passwordInput = document.getElementById("password")

    if (passwordInput.type == "password") {
        passwordInput.type = "text"
    } else {
        passwordInput.type = "password"
    }
}

