
function soma () {
    let numero1 = document.querySelector("#numero1").value
    let numero2 = document.querySelector("#numero2").value
    let display = document.querySelector("#meuResultadoSoma")
    const resultado = parseInt(numero1) + parseInt(numero2) 
    display.innerHTML= resultado
}

function parImpar () {
    let numero3 = 3
    let display = document.querySelector("#meuResultadoPar")
    let resultado = parseInt(numero3) % 2
    if (resultado == 0) {
        display.innerHTML = "O número é par"
    } else {
        display.innerHTML = "O número é ímpar"
    }
}
    
