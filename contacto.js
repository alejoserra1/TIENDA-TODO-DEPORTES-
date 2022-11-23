//submit consulta en el area contacto

const buttonEnviarConsulta = document.getElementById("button-contacto")
const inputNombre = document.getElementById("inp-nombre")
const inputMail = document.getElementById("inp-mail")
const inputConsulta = document.getElementById("inp-consulta")
const divFantasmaDelContacto = document.getElementById("div-contacto-fantasma")

buttonEnviarConsulta.addEventListener('click', (e)=>{
    e.preventDefault()
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


    if(inputNombre.value.length>=5 && inputConsulta.value.length>15 && emailRegex.test(inputMail.value)){
        divFantasmaDelContacto.innerHTML = '<p>Consulta realizada con éxito.</p>'
        divFantasmaDelContacto.classList.remove("hidden-active")
    }

    else{
        divFantasmaDelContacto.innerHTML = '<p>Nombre: 5 caracteres minimo.</p><p>Email: Chequee que sea un email válido.</p><p>Consulta: Minimo 15 caracteres.</p>'
        divFantasmaDelContacto.classList.remove("hidden-active")
    }
})

console.log(divFantasmaDelContacto)