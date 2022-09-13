//Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking
const maioresSeleçoes = ["Brasil", "Alemanha", "Itália", "Argentina", "França"]
console.log("Top 5 seleções com mais títulos da copa do mundo")

for(let ranking = 0; ranking < maioresSeleçoes.length; ranking++){
    console.log(ranking + 1, maioresSeleçoes[ranking])
}

