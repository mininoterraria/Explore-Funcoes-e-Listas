//01. Criar uma função que exibe "Olá, mundo!" no console.
/*
function saudacao(){
    console.log("Olá, mundo!");
}

saudacao();
*/

//02. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
/*
function saudacao(nome){
    console.log(`Olá, ${nome}!`);
}

saudacao('Diego');
*/

//03. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
/*
function dobrarValor(numero){
    return numero * 2;
}

console.log(dobrarValor(5));
*/

//04. Criar uma função que recebe três números como parâmetros e retorna a média deles.
/*
function mediaValores(numero1,numero2,numero3){
    const media = (numero1 + numero2 + numero3) / 3;
    return media;
}
console.log(`A média dos valores 5,4,3 é: ${mediaValores(5,4,3)}`);
*/

//05. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
/*
function maiorValor(numero1,numero2){
    if(numero1 > numero2){
        return `O maior valor é: ${numero1}`;
    }else if(numero1 < numero2){
        return `O maior valor é: ${numero2}`;
    }else{
        return `Os valores são iguais!`;
    }
    
}
console.log(maiorValor(3,7));
*/

//06. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
/*
function multiplicarValor(numero){
    return numero * numero;
}

const numero = 7;

console.log(`O resultado da multiplicação de ${numero} é ${multiplicarValor(numero)}`);
*/
