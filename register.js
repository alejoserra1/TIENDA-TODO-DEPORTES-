//data de la sección registrarse.

const addFormRegister = document.getElementById("addFormRegister")
const inputUserRegister = document.getElementById("usuarioRegister")
const inputContraseñaRegister = document.getElementById("contraseñaRegister")
const inputContraseñaRepetidaRegister = document.getElementById("contraseña-repetidaRegister")
const inputEmailRegister = document.getElementById("emailRegister")
const btnConfirmRegister = document.getElementById("button-confirmarRegister")
const imgValue = document.getElementById("valida")
const imgNoValue = document.getElementById("invalida")
const imgValue2 = document.getElementById("valida2")
const imgNoValue2 = document.getElementById("invalida2")
const imgValue3 = document.getElementById("valida3")
const imgNoValue3 = document.getElementById("invalida3")
const imgValue4 = document.getElementById("valida4")
const imgNoValue4 = document.getElementById("invalida4")

addFormRegister.addEventListener("submit", e=>{
    e.preventDefault();
const validForm = () => {
    if(inputUserRegister.value.length < 5){
        imgNoValue.classList.add("flex")
        imgValue.classList.remove("flex")
        true
    }
    else if (inputUserRegister.value.length >=5 ){
        imgValue.classList.add("flex")
        imgNoValue.classList.remove("flex")
    }

    if(inputContraseñaRegister.value.length < 6){
        imgNoValue3.classList.add("flex")
        imgValue3.classList.remove("flex")
        true
    }
    else if (inputContraseñaRegister.value.length >=6 ){
        imgValue3.classList.add("flex")
        imgNoValue3.classList.remove("flex")
    }

    if(inputContraseñaRepetidaRegister.value === inputContraseñaRegister.value){
        imgValue4.classList.add("flex")
        imgNoValue4.classList.remove("flex")
        true
    }
    else{
        imgNoValue4.classList.add("flex")
        imgValue4.classList.remove("flex")
    }

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(inputEmailRegister.value)) {
        imgValue2.classList.add("flex")
        imgNoValue2.classList.remove("flex")
        true
    } else {
        imgNoValue2.classList.add("flex")
        imgValue2.classList.remove("flex")
    }
}
validForm()
    
})
