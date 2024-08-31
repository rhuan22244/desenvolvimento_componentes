import { somar1, somar2, somar3 } from "./calculos.js"
import ola  from "./calculos.js"

const tituloPrincipal = document.createElement('h1')
tituloPrincipal.textContent = "Aula 05  - JavaScript"


const header = document.querySelector('header')
header.appendChild(tituloPrincipal)


const t2 = document.getElementById('t2')
t2.remove()


const img = document.createElement('img')
img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png'
img.style.width = "400px"
img.style.height = "400px"


header.appendChild(img)


img.addEventListener('mouseover', alteraImagem)
img.addEventListener('mouseout', voltaImagem)




function alteraImagem(){
    img.src = 'https://academy.appmasters.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fappmasters-io%2Fimage%2Fupload%2Fv1634211184%2F1wwdyw5de8avrdkgtz5n_d3dcbffa3d.png&w=1920&q=50'
}
function voltaImagem(){
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png'
}


let frutas = ['maçã', 'laranja']


frutas.push('tomate') // Adiciona no final


frutas.pop() // Remove o último


console.log(frutas.toString()) // Escreve os elementos


frutas.shift() //Remove o primeiro


//console.log(frutas)


frutas.unshift('Melancia') //Insere na primeira posição


//console.log(frutas)
frutas.push('limão')
const textoFrutas = frutas.join(' - ') //Retorna uma string dos valores com separador
console.log(textoFrutas)




// console.log("Função tradicional " + somar1('a', 'b'))
// console.log("Função anônima " + somar2(1, 2))
// console.log("Função de seta " + somar3(1, 2))

setTimeout(()=>{
    console.log('Passou 1 segundo.')
}, 1000)

setInterval(mostraHora, 1000)

tituloPrincipal.style.textAlign = 'center'
tituloPrincipal.style.fontSize = '60px'
function mostraHora(){
    const data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()


    segundo = segundo < 10 ? "0" + segundo : segundo


    tituloPrincipal.textContent = `${hora}:${minuto}:${segundo}`


}


async function buscaCep(cep){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()
    console.log(`Localidade: ${data.localidade}`)
    console.log(`Estato: ${data.uf}`)
}
buscaCep(88990000)




