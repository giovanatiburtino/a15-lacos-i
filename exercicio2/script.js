//Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

let tabuada = Number(prompt("Digite o número da tabuada você quer ver:"))
let numero = tabuada

if(tabuada <= 10){
for(let contagem = 1; contagem <= 10 ; contagem ++){
    tabuada = numero * contagem
    console.log(tabuada)
}} else {
    alert("Digite um número de 1 a 10")
}