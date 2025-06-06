var cenario;
var titulo = document.getElementById("titulo");
var imagem1 = document.getElementById("imagem1");
var imagem2 = document.getElementById("imagem2");
var imagem3 = document.getElementById("imagem3");
var texto = document.getElementById("texto");
var texto1 = document.getElementById("texto1");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");

cenario1();

function resposta(opcao){
    switch(cenario){
        case 0: decisao0(opcao); break;
        case 1: decisao1(opcao); break;
        case 2: decisao2(opcao); break;
        case 3: decisao3(opcao); break;
        case 4: decisao4(opcao); break;
        case 5: decisao5(opcao); break;
        case 6: decisao6(opcao); break;
        case 7: decisao7(opcao); break;
        case 8: decisao8(opcao); break;
        case 9: decisao9(opcao); break;
        case 10: decisao10(opcao); break;
        case 12: decisao12(opcao); break;
        case 13: decisao13(opcao); break;
        case 14: decisao14(opcao); break;
        case 15: decisao15(opcao); break;
        case 16: decisao16(opcao); break;
        case 17: decisao17(opcao); break;
    }
}


function cenario1(){
    cenario = 1;

    titulo.innerHTML = "A PROPOSTA";
    texto.innerHTML = "Gabriel acorda cedo e começa a coletar latinhas recicláveis para conseguir vender e se alimentar. Otávio, um antigo amigo de Gabriel, lhe oferece uma solução mais lucrativa: tráfico de drogas <p> O que Gabriel faz?";

    botao1.innerHTML = "ACEITAR A PROPOSTA"; 
    botao2.innerHTML = "RECUSAR A PROPOSTA";

    botao2.style.display = "block";

}

function decisao1(opcao){
    if(opcao == 1){
        cenario2();
    }else if(opcao == 2){
        cenario3();
    }
}

function cenario2(){
    cenario = 2;

    titulo.innerHTML = "SEGREDO REVELADO";
    texto.innerHTML = "Com o passar do tempo, a família de Gabriel desconfia do fluxo de dinheiro entrando em sua casa, investigam de onde ele vem. Quando descobrem, decepcionados, pedem para que Gabriel pare de vender drogas.<br>Gabriel encontra-se em um dilema: Caso pare, talvez não tenha dinheiro nem para comer ou caso continue, é possivel que seja pego pela polícia e assim irá entristecer sua família ainda mais.<p> Sabendo disso, o que Gabriel decide fazer?";

    botao1.innerHTML = "PARAR DE VENDER DROGAS";
    botao2.innerHTML = "CONTINUAR VENDENDO SENDO MAIS DISCRETO";
}

function decisao2(opcao){
    if(opcao == 1){
        cenario3();
    }else if(opcao == 2){
        cenario4();
    }
}

function cenario3(){
    cenario = 3;

    titulo.innerHTML = "A SITUAÇÃO PIORA";
    texto.innerHTML = "Após ouvir sua família, ele volta a colher reciclagem. Apesar de seus pais viverem de \"bico\" e precisarem do máximo de ajuda possível, eles pedem que Gabriel comece a estudar, já que essa é provavelmente a única solução para que eles alcancem uma vida melhor futuramente.<br>Consequentemente, a situação ficará mais difícil, já que ele terá menos tempo para trabalhar.<p> Gabriel decide começar a estudar?";

    botao1.innerHTML = "SIM";
    botao2.innerHTML = "NÃO";
}

function decisao3(opcao){
    if(opcao == 1){
        cenario5();
    }else if(opcao == 2){
        cenario6();
    }
}

// Opção 1 leva para "O trágico fim"
function cenario4(){
    cenario = 4;

    titulo.innerHTML = "EM FLAGRANTE";
    texto.innerHTML = "Após decidir continuar a vender, Gabriel passa a ser mais discreto para que sua família não perceba. Porém, um certo dia, ele é pego em flagrante pela polícia, que o dá voz de prisão.<p> Qual decisão Gabriel toma?";

    botao1.innerHTML = "TENTAR FUGIR";
    botao2.innerHTML = "FICAR E SER PRESO";
}

function decisao4(opcao){
    if(opcao == 1){
        //cenario7();
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_tragico_fim");
    }else if(opcao == 2){
        cenario8();
    }
}

// Opção 2 leva pro final PROMISSOR
function cenario5(){
    cenario = 5;

    titulo.innerHTML = "UMA GRANDE PERDA";
    texto.innerHTML = "Gabriel se esforça bastante na escola em uma tentativa desesperada de conseguir dar uma vida melhor para sua família. Porém, após alguns anos, a mãe de Gabriel é diagnosticada com câncer e apesar de todos os esforços da família para conseguir dinheiro para o tratamento, ela falece.<br>Ele, agora, se encontra confuso e sem um rumo na vida. Cogitando largar os estudos para trabalhar mais e a história não se repetir.<p> Gabriel decide mesmo parar de estudar?";

    botao1.innerHTML = "SIM";
    botao2.innerHTML = "NÃO";
}

function decisao5(opcao){
    if(opcao == 1){
        cenario10();
    }else if(opcao == 2){
        //cenario9();
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_promissor");
    }
}

// Leva pro final O fim de uma jornada
function cenario6(){
    cenario = 6;

    titulo.innerHTML = "A SITUAÇÃO NÃO MUDA";
    texto.innerHTML = "Gabriel decide apenas trabalhar, mesmo que isso não mude a sua situação. Após alguns anos, a mãe de Gabriel é diagnosticada com câncer, e apesar de todos os esforços da família para conseguir dinheiro para o tratamento, ela falece.<br>Essa situação afetou absurdamente o psicológico de Gabriel. Ele sente a perda da sua mãe todos os dias, ela era seu pilar, sua motivação para continuar e nunca desistir. Apesar de tentar se manter firme, ele não aguenta mais passar por toda essa dor sozinho.<p> Gabriel procura ajuda?";

    botao1.innerHTML = "SIM";
    botao2.innerHTML = "NÃO";
}

function decisao6(opcao){
    if(opcao == 1){
        //cenario15();
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_fim_de_uma_jornada");
    }else if(opcao == 2){
        //cenario12();
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_fim_de_uma_jornada");
    }
}

// leva pro fim
function cenario8(){
    cenario = 8;

    titulo.innerHTML = "UMA BOLA DE NEVE";
    texto.innerHTML = "Gabriel é preso com direito à fiança, mas como sua família não possui o dinheiro, ele cumpre seus 5 anos de pena. Ao cumprir sua sentença, volta para casa e recebe a notícia de que sua mãe foi diagnosticada com câncer, numa tentativa desesperada de conseguir dinheiro, ele volta a traficar.<br> Infelizmente, apesar de todos os esforços, sua mãe morre. Gabriel se encontra confuso, foi contra todos os princípios que foram ensinados pela sua mãe. O peso na consciência chega.<p> Diante disso, o que ele faz?";

    botao1.innerHTML = "CONTINUA A VENDER DROGAS";
    botao2.innerHTML = "DECIDE PARAR DE VENDER";
}

function decisao8(opcao){
    if(opcao == 1){
        //cenario14();
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_O_LADO_OCULTO_DA_MOEDA");
    }else if(opcao == 2){
        //cenario13();
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_sem_volta");
    }
}

function cenario10(){
    cenario = 10;

    titulo.innerHTML = "DESESPERO";
    texto.innerHTML = "Apesar de dar tudo de si, as coisas não fluem e Gabriel se encontra bastante desanimado. Esse sentimento de insuficiência o abala muito, fazendo com que ele desenvolva uma depressão profunda. Ele não aguenta mais.<p>O que ele faz?";

    botao1.innerHTML = "DECIDE BUSCAR TRATAMENTO PSICOLÓGICO";
    botao2.innerHTML = "DECIDE CONTINUAR TENTANDO";
}

function decisao10(opcao){
    if(opcao == 1){
        //cenario15();
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_uma_luz");
    }else if(opcao == 2){
        //cenario12();
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_fim_de_uma_jornada");
    }
}

// Pesquisa
function cenario16(){
    cenario = 16;

    titulo.innerHTML = "POBREZA NO BRASIL";
    texto.innerHTML = "Antes de falarmos sobre a pobreza no Brasil, temos primeiro que definir o que seria a palavra pobreza. \"Pobreza\" é basicamente falta daquilo que é necessário, como: Comida, moradia, etc. <br> Após definir pobreza, como estaria este grande problema em nosso país? A pobreza no Brasil está bem triste e é algo extremamente preocupante. Uma pesquisa feita em 2019 pelo IBGE diz que: <ul><li>Brasil tem quase 52 milhões de pessoas na pobreza;</li> <li>13 milhões de pessoas em extrema pobreza</li></ul> <br> Acreditamos que esses números aumentaram por conta da pandemia que teve início em 2020 e que prevalece até os dias atuais. Outra pesquisa feita pelo IBGE no ano passado diz os estados mais pobres do nosso país: <ul><li>Bahia</li><li>Maranhão</li><li>Acre</li><li>Alagoas</li></ul> <br> Acreditamos que estamos longe de erradicar a pobreza mundial, mas que infelizmente pessoas acabam passando por isso todos os dias e muitas vezes temos boas condições de vida, mas que muitas não damos valor. Pense nisso e no próximo que passa diversos problemas que nem imagina! <p> Referências:";

    link1.innerHTML = "Jornal Nacional.IBGE: Brasil tem quase 52 milhões de pessoas na pobreza e 13 milhões na extrema pobreza. <br>";
    link2.innerHTML = "G1 BA. IBGE aponta BA como estado brasileiro com maior nº absoluto de pessoas extremamente pobres. <p>";
    botao1.innerHTML = "ENCERRAR O JOGO";


    botao2.style.display = "none";
    imagem1.style.display = "block";
    imagem2.style.display = "block";
    imagem3.style.display = "block";
    link1.style.display = "block";
    link2.style.display = "block";

    imagem1.src = "https://i.imgur.com/DWmVGoW.jpg";
    imagem2.src = "https://i.imgur.com/OdMGCiz.jpg";
    imagem3.src = "https://i.imgur.com/EFrzIFM.jpg";
}

function decisao16(opcao){
    if(opcao == 1){
        cenario17();
    }
}

// Créditos
function cenario17(){
    cenario = 17;

    titulo.innerHTML = "OBRIGADO POR JOGAR ! <br> &#x1F601; &#x1F3AE;";
    texto.innerHTML = "<ins>EQUIPE RESPONSÁVEL PELO JOGO</ins>: <br><br> <em>Programação Geral</em>: <br>Leslei Almeida <p> <em>Criação Dos Textos</em>: <br> Maria Eduarda Freitas <br> Julia Vitoria <p> <em>Programação De Interface</em>: <br> Henrique Cardoso <p> <em>Auxílio Geral e Revisão De Bugs</em>: <br> Gabriel Fernandes <p> <em>Pesquisas</em>: <br> Gabriel Fernandes";

    botao1.innerHTML = "JOGAR NOVAMENTE";

    botao2.style.display = "none";
    imagem1.style.display = "none";
    imagem2.style.display = "none";
    imagem3.style.display = "none";
    link1.style.display = "none";
    link2.style.display = "none";
}

function decisao17(opcao){
    if(opcao == 1){
        cenario1();
    }
}
