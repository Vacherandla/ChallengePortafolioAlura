const tiposError = [
    "valueMissing", "typeMismatch", "patternMismatch", "tooLong"
];

const mensajes = {
    nombre: {
        valueMissing: "Por favor, completar todo el formulario antes de enviar.",
        tooLong: "Este campo no puede superar los 50 caracteres."        
    },
    email: {
        valueMissing: "Por favor, completar todo el formulario antes de enviar.",
        typeMismatch: "Por favor, ingresar un email valido",
        tooLong: "Este campo no puede superar los 50 caracteres.",
        patternMismatch: "Por favor, ingresar un email valido"
    },
    asunto: {
        valueMissing: "Por favor, completar todo el formulario antes de enviar.",
        tooLong: "Este campo no puede superar los 50 caracteres."
    },
    mensaje: {
        valueMissing: "EPor favor, completar todo el formulario antes de enviar.",
        tooLong: "EEste campo no puede superar los 300 caracteres."
    }
};

export { tiposError, mensajes };