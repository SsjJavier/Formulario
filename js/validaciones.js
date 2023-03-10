export function valida(input){
    //La propiedad dataset sirve para buscar todos los elementoque tengan la propiedad "data" y luego el .tipo es el  nombre que le pusimos al data por ejemplo "data-tipo"
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }


    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML ="";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajeDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio",
    },
    email:{
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valio",
    },
    password:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Debe de tener de 6 a 12 caracteres sin utilizar signos",
    },
    nacimiento:{
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes de tener al menos 18 años",
    },
    telefono:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es XXXX - XXXX",
    },
    direccion:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe de contener de 10 a 40 caracteres",
    }
};





function mostrarMensajeDeError (tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach((error)=>{
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajeDeError[tipoDeInput][error]);
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}



//funcion que va a recibir un elemento INPUT como parametro
function validarNacimiento(input){
    //La variable fechaCLiente almacenara el valor del input que estamos seleccionando y la clase DATE sirve para mostrarla en formato fecha
    let mensaje = "";
    //Fecha cliente recibe el valor del input gracias a evento.target
    const fechaCliente = new Date(input.value);
    //Esto funciona ya que la funcion MayorDeEdad recibe una variable tipo fecha 
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debe de tener al menos 18 años"; 
    }
    
    //sirve para mostrar un mensaje en dado caso no se cumpla la condicion
    input.setCustomValidity(mensaje);
}


//Funcion que recibe una variable 
function mayorDeEdad(fecha){
    //Me muestra la fecha actual y lo almacena en la variable fechaActual
    const fechaActual = new Date();
    //Me muestra segun la fecha que ingreso el cliente + 18 años cuantos años tiene
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());

    return diferenciaFechas < fechaActual;
}