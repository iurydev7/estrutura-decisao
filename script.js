function somaMaior() {
let A = parseFloat(prompt(`Insira valor de A: `));
let B = parseFloat(prompt(`Insira valor de B: `));
let C = parseFloat(prompt(`Insira valor de C: `));

let soma = A + B;


if( soma < C) {

    alert(`A + B é igual à: ${soma}, 
que é menor que C`)

} else{
    alert(`A + B é igual à: ${soma}, 
que é maior que C`)
    }
}   

function tempoCasamento() {
    let nome = String(prompt("Digite seu nome: "));
    let genero = String(prompt("Qual seu gênero?\n Digite: 'M' para Masculino e 'F' para Feminino")).toUpperCase();
    let estadoCivil = String(prompt("Qual seu estado civil? Solteiro(a) ou Casado(a)?")).toUpperCase();

    if(genero == "F" && estadoCivil == "CASADA") {
        let tempo = Number(prompt("Digite quantos anos de casado(a): "));
        alert(`
            ====================

            Nome: ${nome}
            Tempo de casada: ${tempo} Anos

            ====================
            `);
    } else {
        alert(`
            ====================
            Valha o.O
            ====================
            `)
    }

}

function imparPar() {
    let num = Number(prompt("Digite um número: "));

    // (num % 2 !== 1) ? alert("Este número é Par!") : alert("Este número é Impar!");

    if(num % 2 === 0) {
        alert("Este número é Par!")
    } else if (num % 2 === 1) {
        alert("Este número é Impar")
    } else {
        alert("Caracter Inválido!")
        imparPar()
    }

}

function valoresIguais() {
    let a = Number(prompt("Digite o valor de A:"));
    let b = Number(prompt("Digite o valor de B:"));

    if (a === b) {
        let c = a + b;
        alert("A soma de A + B é: " + c);
    } else {
        let c = a * b
        alert("O produto de A * B é: " + c)
    }
}

function valorPositivoNegativo() {
    let number = Number(prompt("Digite um número positivo ou negativo"));
    // (number > 0) ? (number * 2, alert("O dobro desse número é: " + number)) : number * 3; 
    if (number > 0){
        let dobro = number * 2;
        alert("O dobro de " + number + " é: " + dobro);
    } else if (number < 0) {
        let triplo = number * 3;
        alert("O Triplo de " + number + " é: " + triplo);

    } else {
        alert("Oxe, que isso ?")
    }
}

function valorBooleano() {
    let valor1 = Number(prompt("Digite '1' para true ou '0' para false "));
    let valor2 = Number(prompt("Digite '1' para true ou '0' para false "));

    let bool1 = Boolean(valor1);
    let bool2 = Boolean(valor2);

    if (bool1 === false && bool2 === false) {
        alert("Ambos são Falsos");
    } else if (bool1 === true && bool2 === true) {
        alert("Ambos são verdadeiros");
    } else {
        alert("Um deles é verdadeiro e o outro é falso");
    }
}

function lerVariaveis() {
    let variavel = Number(prompt("Digite um número:"));
    let resto = variavel % 2;
    if (resto === 0) {
        let mais5 = variavel + 5;
        alert("Resultado: " + mais5)
    } else {
        let mais8 = variavel + 8;
        alert("Resultado: " + mais8)
    }
}

function ordenarDecrescente() {
    let a = parseInt(prompt("Digite um número: "));
    let b = parseInt(prompt("Digite um número: "));
    let c = parseInt(prompt("Digite um número: "));

    if(a > b && a > c) {
        if(b > c){
            alert(`${a}, ${b}, ${c}`);
        } else {
            alert(`${a}, ${c}, ${b}`);
        }
    } else if (b > a && b > c) {
        if( a > c) {
            alert(`${b}, ${a}, ${c}`);
        } else {
            alert(`${ba}, ${c}, ${a}`);
        }
    } else {
        if( b > a) {
            alert(`${c}, ${b}, ${a}`);
        } else {
            alert(`${c}, ${a}, ${b}`);
        }
    }
}

function pesoIdeal() {
    let genero = prompt("Digite seu gênero: (Ex: 'M' ou 'F')").toUpperCase();
    let altura = parseFloat(prompt("Digite sua altura: (Ex: '1.75')"));
    let pesoIdeal;

    if(genero === 'M') {
        pesoIdeal = (72.7 * altura) - 58;
        alert(`O seu peso ideal é de: ${pesoIdeal}`);
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
    }
    alert(`O seu peso ideal é de: ${pesoIdeal.toFixed(2)} Kg `)
}

function descobrirImc(){
    let peso = parseFloat(prompt("Digite seu peso: ex: 95.50"));
    let altura = parseFloat(prompt("Digite sua altura: ex 1.80"));
    const imc = peso / (altura ** 2);
    let condicao;

    switch (true) {
        case imc < 18.5:
            condicao = "Abaixo do peso";
            break;
        case imc >= 18.5 && imc <= 25:
            condicao = "Peso normal";
            break;
        case imc > 25 && imc <= 30:
            condicao = "Acima do peso";
            break;
        case imc > 30:
            condicao = "Obeso";
            break;
        default:
            alert("Opção inváLida!");
            break;
    }
    alert(`
        IMC: ${imc.toFixed(2)}
        Condição: ${condicao}
        `);
}

function verDesconto() {
    let preco = parseFloat(prompt("Digite o valor do produto: "));
    let codigo = parseInt(prompt(`
        Digite o código da condição de pagamento: 
        1- À vista em dinheiro ou cheque (10% de desconto)
        2- À vista no cartão de crédito (15% de desconto)
        3- Em duas vezes, preço normal de etiqueta
        4- Em duas vezes, preço normal de etiqueta (10% de juros)
        `));
    let precoFinal;

    switch(codigo){
        case 1:
            precoFinal = preco * 0.9;
            break;

        case 2:
            precoFinal = preco * 0.85;
            break;
        case 3:
            precoFinal = preco;
            break;
        case 4: 
            precoFinal = preco * 1.1;
            break;
        default: 
            alert("Condição de pagamento inválida!");
            break;
    }
    (codigo >= 3) 
    ? alert(`Duas parcelas de: R$ ${(precoFinal / 2).toFixed(2)} cada`)
    : alert(`Valor a pagar: R$ ${precoFinal.toFixed(2)} cada`);
}