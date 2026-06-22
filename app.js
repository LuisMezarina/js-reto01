const ingresado = document.getElementById("a-convertir") 
const metrosConvertir = document.getElementById("metros1")
const kilometrosConvertir = document.getElementById("kilometros1")
const millasConvertir = document.getElementById("millas1")
const celciusConvertir = document.getElementById("celcius1")
const farenheitConvertir = document.getElementById("farenheit1")
const metrosObtenido = document.getElementById("metros2")
const millasObtenido = document.getElementById("millas2")
const kilometrosObtenido = document.getElementById("kilometros2")
const celciusObtenido = document.getElementById("celcius2")
const farenheitObtenido = document.getElementById("farenheit2")

let boton = document.getElementById("calcular")



function proceso() {
    const distancia = metrosConvertir.value
    const distanciaNumero = parseFloat(ingresado.value)
    let resultadoDistancia = distanciaNumero * 0.01
}

let resultado = boton.addEventListener("click", proceso)
