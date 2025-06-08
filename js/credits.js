var creditos = false;
var titulo = document.getElementById("titulo");
var texto = document.getElementById("texto");
var imagem1 = document.getElementById("imagem1");
var imagem2 = document.getElementById("imagem2");
var imagem3 = document.getElementById("imagem3");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var botao1 = document.getElementById("botao1");

function resposta(opcao){
    if(creditos == false){
        credits();
    }else{
        window.location.href = '../index.html';
    }
}

function credits(){
    creditos = true;

    titulo.innerHTML = "OBRIGADO POR JOGAR ! <br> &#x1F601; &#x1F3AE;";
    texto.innerHTML = "<ins>EQUIPE RESPONSÁVEL PELO JOGO:</ins> <em>Programação Geral</em>: Leslei Almeida <p> <em>Criação Dos Textos</em>: <p> Maria Eduarda Freitas </p> Julia Vitoria <p> <em>Programação De Interface</em>: <br> Henrique Cardoso <p> <em>Auxílio Geral e Revisão De Bugs</em>: <br> Gabriel Fernandes <p> <em>Pesquisas</em>: <br> Gabriel Fernandes";

    botao1.innerHTML = "JOGAR NOVAMENTE";
    imagem1.style.display = "none";
    imagem2.style.display = "none";
    imagem3.style.display = "none";
    link1.style.display = "none";
    link2.style.display = "none";
}