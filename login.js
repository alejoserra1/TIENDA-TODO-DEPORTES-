//data de la sección login.

const addFormLogin = document.getElementById("addFormLogin")
const inputUserLogin = document.getElementById("usuarioLogin")
const inputContraseñaLogin = document.getElementById("contraseñaLogin")
const btnConfirmLogin = document.getElementById("btn-submit")

//validacion formulario login.

const showError = (input, message) => {
    const campoForm = input.parentElement;
    const errorField = campoForm.querySelector("span");

    errorField.classList.remove("success");
    errorField.classList.add("error");

    errorField.textContent = message;
}

const showSuccess = (input, message) => {
    const campoForm = input.parentElement;
    const errorField = campoForm.querySelector("span");

    errorField.classList.add("success");
    errorField.classList.remove("error");

    errorField.textContent = message;
}

    addFormLogin.addEventListener('submit', e=>{
        e.preventDefault();
    const usuarioLogin = inputUserLogin.value;
    if (usuarioLogin.length < 5) {
        showError(inputUserLogin,"El usuario ingresado es inválido (minimo 5 caracteres)❌")
    } else if (usuarioLogin.length >= 5 ) {
        showSuccess(inputUserLogin, "Usuario válido✅")
    }
    
    const claveLogin = inputContraseñaLogin.value;
    if (claveLogin.length <6) {
        showError(inputContraseñaLogin,"Contraseña invalida (minimo 6 caracteres)❌")
    } else if (claveLogin.length>=6) {
        showSuccess(inputContraseñaLogin, "Contraseña válida✅")
    }
    this.submit;
    });