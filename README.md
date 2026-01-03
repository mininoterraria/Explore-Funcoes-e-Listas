01. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
```js
const h1 = document.querySelector('h1');
h1.innerHTML = 'Hora do Desafio!';
```
02. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
```js
function botaoConsole(){
    console.log("O botão foi clicado!");
}
```
03. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
```js
function botaoAlerta(){
    alert("Eu amo JS");
}
```
04. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
```js
function botaoPrompt(){
    const nomeCidade = prompt("Insira uma cidade do Brasil:");
    alert(`Estive em ${nomeCidade} e lembrei de você.`);   
}
```
05. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
```js
function validarInput(campoInput){
    const regex = /^[+-]?[0-9]+$/;
    if(!regex.test(campoInput)){
        return true;
    }
}

function botaoSomar(){
    let numero1 = prompt("Insira o primeiro número: ");
    if(validarInput(numero1)){
        console.log("O campo numero1 contém caracteres inválidos!");
        return;
    }

    let numero2 = prompt("Insira o segundo número:");

    if(validarInput(numero2)){
        console.log(`O campo numero2 contém caracteres inválidos!`);
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    alert(`Resultado da soma: ${numero1 + numero2}`);

}
```
06. Criar uma função que exibe "Olá, mundo!" no console.
```js
function saudacao(){
    console.log("Olá, mundo!");
}

saudacao();
```
07. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
```js
function saudacao(nome){
    console.log(`Olá, ${nome}!`);
}

saudacao('Diego');
```
08. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
```js
function dobrarValor(numero){
    return numero * 2;
}
console.log(dobrarValor(5));
```
09. Criar uma função que recebe três números como parâmetros e retorna a média deles.
```js
function mediaValores(numero1,numero2,numero3){
    const media = (numero1 + numero2 + numero3) / 3;
    return media;
}
console.log(`A média dos valores 5,4,3 é: ${mediaValores(5,4,3)}`);
```
10. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
```js
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
```
11. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
```js
function multiplicarValor(numero){
    return numero * numero;
}

const numero = 7;

console.log(`O resultado da multiplicação de ${numero} é ${multiplicarValor(numero)}`);
```


