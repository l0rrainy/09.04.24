// strings são textos que ficam em aspas duplas
//int = intero
//float = numereos quebrados
//array sao varios elementos de uma vez so
// booleano é um verddeir ou falso

var nome = "Lorrainy ";
var sobrenome = "Santos"

console.log("Bem-vindo " + nome + sobrenome + "! 🤗")

var idade = 16 //number
var idadeString = "16"

var float = 3.14

var numero = 7

var soma1 = idade + numero;
var soma2 = idadeString + numero;

console.log("Teste 1: " + soma1); // soma
console.log("Teste 2: " + soma2); // concatena

//function
function soma(a, b ){
    return a + b;
}

console.log("a soma de A + B é: " + soma(12, 25));

//array

var cestaDeFrutas = ['uva', 'goiaba', 'caqui', 'laranja', 'morango','pêra', 'kiwi']

var comprimento = cestaDeFrutas.length //length é comprimento

console.log("quantas frutas tenho? " + comprimento);
console.log("a fruta preferida da lolo é? " + cestaDeFrutas[1])
// pegar a posição do meu array "cestaDeFrutas[1]"

var frutas = cestaDeFrutas.push('banana') // push acrescenta
console.log(frutas); 

var corte = cestaDeFrutas.splice(2) // splice corta
console.log(corte);

//loop = for
// (i = i + 1) === ( i++ )
for (let i = 1; i <= 5; i = i + 1){
    console.log(i);
}

for(let i = 10; i >= 5 ; i--){
    console.log(i);
}

function Mensagem(string){
    return string;
}

console.log(Mensagem("oie 😝"));

//booleanos
var booleanoVerdadeiro = true;
var booleanoFalso = false;

// () parenteses é parametros
// [] colchetes  é para array
// {} chaves é para objeto
//objeto

var carro = {
    // key : value
    // chave: valor
    marca: 'bmw',
    ano: 2009,
    valor: 5000000,
    cor: 'vermelho'
}

var marca = carro.marca

console.log(carro);
console.log("a marca do Carro é: " + marca);
console.log("a cor do Carro é: " + carro.cor); 

function calcularIdade(nascimento){
    return 2024 - nascimento;
}

console.log("a idade da pessoa é: " + calcularIdade(2008));

