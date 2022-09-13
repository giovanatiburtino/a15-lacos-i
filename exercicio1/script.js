let coxinha = prompt("Deseja comer uma coxinha? S ou N").toUpperCase()
let conta = 0

while(coxinha === "S"){
    coxinha = prompt ("Deseja comer mais uma coxinha?").toUpperCase()
    conta += 2.50
    console.log(conta)
}

console.log(`o valor total da conta é ${conta} reais`)