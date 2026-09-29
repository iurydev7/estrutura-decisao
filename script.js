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


