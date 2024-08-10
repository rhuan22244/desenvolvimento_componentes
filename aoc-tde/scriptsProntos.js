
function soma () {
    let numero1 = document.querySelector("#numero1").value
    let numero2 = document.querySelector("#numero2").value
    let display = document.querySelector("#meuResultado")
    const resultado = parseInt(numero1) + parseInt(numero2) 
    display.innerHTML= resultado
}
    
