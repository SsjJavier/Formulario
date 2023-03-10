//Guarda el valor en una variable de lo que hay en el input con el ID="birth"
const inputNacimiento = document.querySelector("#birth");

//Se creo el evento que va a suceder cuando el usuario deje de clickear sobre el input de DATE

inputNacimiento.addEventListener("blur", (evento)=>{
    //Nos muestra en que posicion del DOM estamos llamando a la funcion validarNacimiento
    validarNacimiento(evento.target);
})


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