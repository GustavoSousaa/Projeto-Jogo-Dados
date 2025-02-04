let computer = document.querySelector(".computer")
let user = document.querySelector(".user")
let result = document.querySelector(".result")
let score = document.querySelector(".score")

let scoreComputador = 0
let scoreUsuario = 0
let vencedor = ""

const sortearValores = () => {
    let somaUsuario = 0
    let somaComputador = 0
    
    user.innerHTML = ""
    computer.innerHTML = ""

    for(let i = 0; i < 3; i++) {
        somaComputador += sortearDado('computer')
        somaUsuario += sortearDado('user')   
    }

    verificarVencedor(somaUsuario, somaComputador)
}

const verificarVencedor = (somaUsuario, somaComputador) => {
    if(somaComputador > somaUsuario) {
        scoreComputador++
        vencedor = "Computador"
    } else if (somaUsuario > somaComputador) {
        scoreUsuario++
        vencedor = "Usuario"
    } else {
        vencedor = "Empate"
    }

    result.innerHTML = `Vencedor: ${vencedor}`
    score.innerHTML = `Usuario: ${scoreUsuario} / Computador: ${scoreComputador}`
}

const sortearDado = (nomeClasse) => {
    let sorteado = Math.floor(Math.random() * 5 + 1)
    let container = document.querySelector(`.${nomeClasse}`)

    container.innerHTML += `<img src="./assets/dice-${sorteado}.png" />`

    return sorteado
}