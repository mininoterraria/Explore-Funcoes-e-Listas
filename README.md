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
12. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
```js
function validarCampo(parametro){ //Função para validar o campo de altura/peso.
    const regex = /^[0-9]+(\.[0-9]+)?$/; 
    return regex.test(parametro); //Retorna true se válido.
}

function calculoIMC(altura,peso){ //Cálculo IMC
    
    altura = prompt("Insira sua altura: ");

    if(!validarCampo(altura)){
        console.log(`Insira um valor válido no campo altura!`);
        return;
    }

    altura = parseFloat(altura);

    peso = prompt("Insira seu peso: ");

    if(!validarCampo(peso)){
        console.log(`Insira um valor válido no campo peso!`);
        return;
    }

    peso = parseFloat(peso);

    if (altura <= 0 || peso <= 0) {
        console.log("Altura e peso devem ser maiores que zero!");
        return;
    }

    return peso / (altura * altura);
}

const resultadoCalculo = calculoIMC();
resultadoCalculo !== undefined ? console.log(`O cálculo IMC é: ${resultadoCalculo.toFixed(2)}`) : '';
```
13. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
```js
function validarCampo(valorInserido){ //Função para validar campos inputados pelo usuário.
    const regex = /^[0-9]+$/;
    return regex.test(valorInserido);
}

function fatorial(n){ //Função para cálculo do fatorial do número inputado.
    let fatorial = 1;

    for(let i = n; i > 1;i--){
        fatorial *= i;
    }

    return fatorial;
}

function calcularFatorial(numero){
    numero = prompt("Insira um valor inteiro positivo para calcular seu fatorial: ");

    if(!validarCampo(numero)){
        console.log("Insira apenas valores positivos inteiros!");
        return;
    }

    numero = parseInt(numero);

    const resultadoCalculo = fatorial(numero);

    return console.log(`O fatorial de ${numero} é: ${resultadoCalculo}`);

}

calcularFatorial();
```
14. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
```js
function validarCampo(valorInput){ //Função para validar campos inputados pelo usuário.
    const regex = /^-?\d+([.,]\d+)?$/;
    return regex.test(valorInput);
}

function conversaoCalculo(n){ //Função para fazer a conversão de dólar para real.
    return n * 4.80;
}

function converterMoeda(valor){ //Função para rodar o algoritmo de conversão.
    valor = prompt("Insira o valor em dolar que deseja converter em reais: ");

    if(!validarCampo(valor)){
        alert("Insira um valor válido em dólar!");
        return;
    }

    valor = valor.replace(",",".");
    valor = Number(valor);
    const resultadoCalculo = conversaoCalculo(valor);
    console.log(`$${valor.toFixed(2)} dólares em reais é: R$${resultadoCalculo.toFixed(2)} `);
}

converterMoeda();
```
15. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
```js
function validarCampo(campoInputado){ //Função para validar o input inserido pelo usuário.
    const regex = /^\d+([.,]\d+)?$/;
    return regex.test(campoInputado);
}

function tratarCampoNumerico(campoNumerico){ //Função para tratar o campo numérico validado.
    campoNumerico = campoNumerico.replace(/,/g, '.');
    return campoNumerico = Number(campoNumerico);
}

function calcularArea(valorAltura,valorBase){ //Função para calcular área do retângulo.
    return valorAltura * valorBase;
}

function calcularPerimetro(valorAltura,valorBase){ //Função para calcular perímetro do retângulo.
    return (2 * valorAltura) + (2 * valorBase); 
}

function calcularAreaPerimetro(altura, base){ //Função que fará todo o processamento dos cálculos de área/perímetro.
    do{
        altura = prompt("Insira o valor da altura: ");
        !validarCampo(altura) ? alert("Insira um valor válido para altura!") : '';
    }while(!validarCampo(altura));

    altura = tratarCampoNumerico(altura);

    do{
        base = prompt("Insira o valor da base: ");
        !validarCampo(base) ? alert("Insira um valor válido para base!") : '';
    }while(!validarCampo(base));

    base = tratarCampoNumerico(base);

    const valorArea = calcularArea(altura,base);

    const valorPerimetro = calcularPerimetro(altura,base);

    alert(`Área desse retângulo: ${valorArea.toFixed(2)} / Perímetro desse retângulo: ${valorPerimetro.toFixed(2)}`);
    
}

calcularAreaPerimetro(); //Chamada da função principal.
```
16. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
```js
function validarCampo(campoInputado){ //Função para validar o input inserido pelo usuário.
    const regex = /^\d+([.,]\d+)?$/;
    return regex.test(campoInputado);
}

function tratarCampoNumerico(campoNumerico){ //Função para tratar o campo numérico validado.
    campoNumerico = campoNumerico.replace(/,/g, '.');
    return campoNumerico = Number(campoNumerico);
}

function calcularArea(valorRaio){ //Função para calcular área do círculo.
    return 3.14 * (valorRaio * valorRaio);
}

function calcularPerimetro(valorRaio){ //Função para calcular perímetro do círculo.
    return 2 * 3.14 * valorRaio;
}

function calcularAreaPerimetro(raio){ //Função que fará todo o processamento dos cálculos de área/perímetro.
    do{
        raio = prompt("Insira o valor da raio: ");
        !validarCampo(raio) ? alert("Insira um valor válido para o raio!") : '';
    }while(!validarCampo(raio));

    raio = tratarCampoNumerico(raio);

    const valorArea = calcularArea(raio);

    const valorPerimetro = calcularPerimetro(raio);

    alert(`Valor da área da sala: ${valorArea.toFixed(2)} / Valor do perímetro da sala: ${valorPerimetro.toFixed(2)}`);

}

calcularAreaPerimetro(); //Chamada da função principal.
```
17. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
```js
function validarCampo(campoInputado){ //Função para validar o input inserido pelo usuário.
    const regex = /^\d+([.,]\d+)?$/;
    return regex.test(campoInputado);
}

function tratarCampoNumerico(campoNumerico){ //Função para tratar o campo numérico validado.
    campoNumerico = campoNumerico.replace(/,/g, '.');
    return campoNumerico = Number(campoNumerico);
}

function gerarTabuada(valorParaTabuada){ //Função para fazer o cálculo da tabuada.
    let resultados = [`Tabuada de ${valorParaTabuada}: \n`];
    for(let i = 1; i <= 10; i++){
       resultados.push(`${i} x ${valorParaTabuada} = ${i * valorParaTabuada}`);
    }

    let tabuadaGerada = resultados.join("\n");

    alert(tabuadaGerada);
    
}

function tabuada(valor){ //Função que faz todo o processamento da tabuada.
    do{
        valor = prompt("Insira o valor que deseja ver a tabuada: ");
        !validarCampo(valor) ? alert("Insira um valor válido!") : '';
    }while(!validarCampo(valor));

    valor = tratarCampoNumerico(valor);

    gerarTabuada(valor);

}

tabuada();
```
18. Crie uma lista vazia, com o nome listaGenerica.
```js
const listaGenerica = [];
```
19. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python' e adicione à lista os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
```js
const linguagensDeProgramacao = ['Javascript','C','C++','Kotlin','Python'];
linguagensDeProgramacao.push('Java','Ruby','GoLang');
```
20. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
```js
const alimentos = ['banana','maçã','pera'];
console.log(alimentos[0]);
```
21. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
```js
const ferramentas = ['alicate','martelo','prego'];
console.log(ferramentas[1]);
```
22. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
```js
const religioes = ['cristianismo','islamismo','budismo'];
console.log(religioes[2]);
```



