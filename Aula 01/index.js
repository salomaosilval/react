/*
* Imutabilidade
*/

// Não fazer

let numero = 0;

const somaDezNoNumero = () => numero = numero + 10;

// Fazer

const numero1 = 0;

const somaDezNoNumero1 = () => numero1 + 10;

/*
* Stateless
*/

const somar = (x, y) => x + y;

// Fibonacci = antepenúltimo + último

const calcularFibonacci = (contador) => {
    let resultado = [0, 1];

    for (let i = 2; i < contador; i++) {
        const valorSomado = somar(resultado[i - 2], resultado[i - 1]);
        resultado.push(valorSomado);
    }

    return resultado;
}

console.log(calcularFibonacci(10));

// Refatorando (Recursando)

const calcularFibonacciRec = (posicao) => {
    if (posicao == 0) {
        return 0;
    } else if (posicao <= 2) {
        return 1;
    } else {
        return calcularFibonacciRec(posicao - 2) + calcularFibonacciRec(posicao - 1);
    }
}

console.log(calcularFibonacciRec(10));

const obterSequenciaFibonacci = (contagem) => {
    return [...Array(10)].map((valor, index) => calcularFibonacciRec(index))
}

console.log(obterSequenciaFibonacci(10));

/*
* Puras
*/

// Impura
const trabalharComPI = (lado) => Math.PI * lado * lado;
// Pura
const trabalharComPI2 = (pi, lado) => pi * lado * lado;

// Composição de função
[1, 2, 3, 4, 5].filter(o => o != 2).map(o => o + 1);

// Recursividade

// Fatorial: Ele * Ele - 1

const fatorial = (numero) => {
    if (numero == 0 || numero == 1) {
        return 1;
    } else {
        return numero * fatorial(numero - 1);
    }
}

/*
* Estado Compartilhado (Váriavel Global)
*/

const PI = 3.14;

const somaPI = () => 3.14 * PI;

/*
* Função de primeira classe:
* Serem atribuidas a váriaveis
* Podem ser passadas por parâmetros
* Podem ser retornadas como resultado
*/

// Serem atribuidas a váriaveis
const primeiraComArrow = () => {}
const primeiraComFunction = function () {
    return primeiraComFunction;
}

// Podem ser passadas por parâmetro
function obterNomeUsuario () {
    return "Gabriel";
}

function olaUsuario(obterNome) {
    console.log(`Olá, ${obterNome()}`);
}

// Podem ser retornadas como resultado
function obterMensagem () {
    return () => console.log("Oi");
}

let ola = obterMensagem();
ola();

/*
* Função de alta ordem
* Podem receber outras funções como argumentos
* Podem retornar funções
*/

// Podem receber outras funções como argumentos
function olaUsuarioAltaOrdem (funcaoObterNome) {
    console.log(`Olá, ${funcaoObterNome()}`);
}

olaUsuarioAltaOrdem(function() {
    return "Alta Ordem";
})

// Podem retornar funções
function obterMensagemAltaOrdem () {
    return () => "Olá";
}