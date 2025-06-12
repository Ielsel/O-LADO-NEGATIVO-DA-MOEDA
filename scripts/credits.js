var creditsActive = false;
var headTitle = document.getElementById("headTitle");
var headText = document.getElementById("headText");
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var Option1 = document.getElementById("Option1");

function respose(){
    if(creditsActive == false){
        credits();
    }else{
        window.location.href = '../index.html';
    }
}

function credits(){
    creditsActive = true;

    headTitle.innerHTML = "OBRIGADO POR JOGAR ! <br> &#x1F601; &#x1F3AE;";
    headText.innerHTML = "<h1>EQUIPE RESPONSÁVEL PELO JOGO:</h1><hr><p><ins>Desenvolvimento</ins>:</p><p>Leslei Almeida</p><p><ins>Interface</ins>:</p><p>Henrique Cardoso</p><p><ins>Desenvolvimento dos textos</ins>:</p><p>Maria Eduarda Freitas e Julia Vitoria</p><p><ins>Auxílio Geral, revisão de bugs e pesquisa</ins>:</p><p>Gabriel Fernandes</p>";

    Option1.innerHTML = "JOGAR NOVAMENTE";
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    link1.style.display = "none";
    link2.style.display = "none";

    document.body.style.textAlign = "center";
    let ps = document.getElementsByTagName("p");
    for (let p of ps) {
        p.style.textAlign = "center";
    }
}