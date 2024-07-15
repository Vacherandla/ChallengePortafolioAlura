//Haz tú validación en javascript acá
import { tiposError, mensajes } from "./errores.js";
const formulario = document.querySelector("[data-formulario]");
const camposDeFormulario = document.querySelectorAll("[required]")
const submitB = document.querySelector('#submitB'); 

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    validarFormulario();
    const listasRepuestas={
        nombre:e.target.elements["nombre"].value,
        email:e.target.elements["email"].value,
        asunto:e.target.elements["asunto"].value,
        mensaje:e.target.elements["mensaje"].value
    }
    localStorage.setItem("formulario",JSON.stringify(listasRepuestas));
})

function validarFormulario(){
    let valido = true;
    camposDeFormulario.forEach((campo)=>{
        if(!campo.checkValidity()){
            valido = false;
        }
    });
    submitB.disabled = !valido;
}
camposDeFormulario.forEach((campo)=>{
    campo.addEventListener("blur",()=> {
        verficarCampo(campo);
        validarFormulario();
    })
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
})

function verficarCampo(campo){
    let mensaje = "";
    campo.setCustomValidity("");
    tiposError.forEach(error =>{
        if(campo.validity[error]){
            mensaje = mensajes[campo.name][error]
            console.log(mensaje);
        }
    })
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    const validarInputCheck = campo.checkValidity();
    if (!validarInputCheck){
        mensajeError.textContent = mensaje;
    } else(mensajeError.textContent = "no error");
}

