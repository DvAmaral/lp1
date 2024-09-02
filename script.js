//let numero = 7.01

//math.round arredondamento comum
//console.log(math.round(numconsoleero))

//math.ceil arredonda sempre para cima
//console.log(math.ceil(numero))

//math.ceil arredonda sempre para baixo
//console.log(math.floor(numero))

//Math.pow gera potenciação
//console.log(math.pow(5,2))

//Math.sqrt gera raiz quadrada
//console.log(math.sqrt(35))

//Math.abs gera numero absoluto positivo
//console.log(math.abs(-5))

//Math.min e math.max encontram o maior e menor numero
//console.log(math.min( 7 ,45 ,89 ,2 ,125 ))
//console.log(math.max( 7, 45, 89 , 2 , 125))
let num1 = 20
let num2 = 10

let media = (num1 + num2) / 2

let arredondamentoparacima = Math.ceil(media);
console.log("O arredondamento do numero para cima é:" + arredondamentoparacima);

let arredondamentoparabaixo = Math.floor(media)
console.log("O arredondamento do numero para baixo é:" + arredondamentoparabaixo);