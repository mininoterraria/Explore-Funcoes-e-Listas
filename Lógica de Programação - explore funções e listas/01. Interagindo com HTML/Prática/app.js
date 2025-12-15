//01. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
/*
const h1 = document.querySelector('h1');
h1.innerHTML = 'Hora do Desafio!';
*/

//02. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
/*
function botaoConsole(){
    console.log("O botão foi clicado!");
}
*/

//03. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
/*
function botaoAlerta(){
    alert("Eu amo JS");
}
*/

//04. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
/*
function botaoPrompt(){
    const nomeCidade = prompt("Insira uma cidade do Brasil:");
    alert(`Estive em ${nomeCidade} e lembrei de você.`);   
}
*/

//05. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

/*
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
*/




