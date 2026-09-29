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