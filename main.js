alert("Captive Portal da Padaria")

const PASSWORD = "pao123"
let attempts = 0

while (attempts < 3) {
    let enterPassword = prompt("Digite a senha: ")
    if (enterPassword === PASSWORD) {
        alert("Conectado, bom café!")
        break        
    } else {
        alert("Senha incorreta! ")
    }

    attempts++
}
        if (attempts === 3) {
            alert("Você foi bloquado. Tente novamente mais tarde.")
        }

alert("Retrospectiva 2026")
let count = 10

    while (count > 0) {
        alert(count)
        console.log(count)

        count-- 
    }
    if (count ===  0) {
        alert("Feliz Ano Novo!")
        console.log("Feliz Ano Novo!")
    }

alert("Cofrinho do Pedro")
let left = 300
let gains = 0
let weeks = 0
 
    while (left > 0) {
    gains = prompt("Quanto você ganhou essa semana?")
    left = left - gains
    alert(`Faltam R$${left}.`)
     weeks++
 }
    if (left <= 0) {
    alert("Meta alcançada!") 
    alert(`Você levou ${weeks} semanas.`)       
    } 

alert("Pote de balas da Dona Cida")

let number = Number(prompt("Quantas balas tem no pote?"))
let attempt = 0

while (attempt !== number) {
    attempt = Number(prompt("Quantas balas tem no pote?"))

    if (isNaN(attempt) || attempt > 50 || attempt < 1) {
        alert("Insira um valor entre 1 e 50.")
    } else if (attempt === number) {
        alert("Parabéns! Você acertou a quantidade de balas!")
        alert("Seu prêmio é um café com bolo.")
    } else if (attempt < number) {
        alert(`No pote tem mais de ${attempt} balas.`)
    } else {
        alert(`No pote tem menos de ${attempt} balas.`)
    }
}