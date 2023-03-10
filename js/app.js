import { valida } from "./validaciones.js";

//La variable inputs esta seleccionando todos los elementos input
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input)=>{
        valida(input.target);
    })
})