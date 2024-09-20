let cantidad = document.getElementById("cantidad");
let contrasena = document.getElementById("contrasena");
let avisoP = document.getElementById("aviso");
let mensajeP = document.getElementById("mensaje");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar() {

    let numeroDigitado = parseInt(cantidad.value);
    
    if (cantidad.value === "") {

        mensajeP.textContent = "El campo está vacío. Introduzca una cantidad por favor.";
        mensajeP.style.color = "#FF7F7F";
        mensajeP.style.fontFamily = "Inter";
        mensajeP.style.fontSize = "20px";

    } else {
        validarCantidad(numeroDigitado);

        let password = "";

        for (let i = 0; i < numeroDigitado; i++) {
            
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

            password += caracterAleatorio;
            
        }

        contrasena.value = password;

        validarContrasena(password);
    }

}

function limpiarCampo() {
    
    cantidad.value = "";
    contrasena.value = "";
    mensajeP.textContent = "";
    avisoP.textContent = "";
    
}

function validarCantidad(numeroDigitado) {
    if (numeroDigitado < 8) {

        mensajeP.textContent = "La cantidad de caracteres tiene que ser mayor que 8.";
        mensajeP.style.color = "#FF7F7F";

    } else {

        mensajeP.textContent = "Contraseña generada correctamente.";
        mensajeP.style.color = "#90EE90";

    }
}

function validarContrasena(contrasena) {
    let letrasMayusculas = new RegExp(/[A-Z]/);
    let letrasMinusculas = new RegExp(/[a-z]/);
    let caracteresEspeciales = new RegExp(/[!@#$%^&*()]/);
    let numeros = new RegExp(/\d/);

    if (letrasMayusculas.test(contrasena) && letrasMinusculas.test(contrasena) && caracteresEspeciales.test(contrasena) && numeros.test(contrasena)) {

        avisoP.textContent = "La contraseña es fuerte!";
        avisoP.style.color = "#90EE90";

    } else {

        avisoP.textContent = "La contraseña es débil! Le falta una letra mayúscula, minúscula, caracter especial o un número.";
        avisoP.style.color = "#FF7F7F";

    }
}