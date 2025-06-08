var cenario;
var titulo = document.getElementById("titulo");
var imagem1 = document.getElementById("imagem1");
var texto = document.getElementById("texto");
var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");

cenario1();

function resposta(opcao){
    switch(cenario){
        case 1: decisao1(opcao); break;
        case 2: decisao2(opcao); break;
        case 3: decisao3(opcao); break;
        case 4: decisao4(opcao); break;
        case 5: decisao5(opcao); break;
        case 6: decisao6(opcao); break;
        case 8: decisao8(opcao); break;
        case 10: decisao10(opcao); break;
    }
}


function cenario1(){
    cenario = 1;
    titulo.innerHTML = "A PROPOSTA";
    texto.innerHTML = "Gabriel acorda cedo e começa a coletar latinhas recicláveis para conseguir vender e se alimentar. Otávio, um antigo amigo de Gabriel, lhe oferece uma solução mais lucrativa: tráfico de drogas <p> O que Gabriel faz?";
    botao1.innerHTML = "ACEITAR A PROPOSTA"; 
    botao2.innerHTML = "RECUSAR A PROPOSTA";
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

function cenario4(){
    cenario = 4;
    titulo.innerHTML = "EM FLAGRANTE";
    texto.innerHTML = "Após decidir continuar a vender, Gabriel passa a ser mais discreto para que sua família não perceba. Porém, um certo dia, ele é pego em flagrante pela polícia, que o dá voz de prisão.<p> Qual decisão Gabriel toma?";
    botao1.innerHTML = "TENTAR FUGIR";
    botao2.innerHTML = "FICAR E SER PRESO";
}

function decisao4(opcao){
    if(opcao == 1){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_tragico_fim");
    }else if(opcao == 2){
        cenario8();
    }
}

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
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_promissor");
    }
}

function cenario6(){
    cenario = 6;
    titulo.innerHTML = "A SITUAÇÃO NÃO MUDA";
    texto.innerHTML = "Gabriel decide apenas trabalhar, mesmo que isso não mude a sua situação. Após alguns anos, a mãe de Gabriel é diagnosticada com câncer, e apesar de todos os esforços da família para conseguir dinheiro para o tratamento, ela falece.<br>Essa situação afetou absurdamente o psicológico de Gabriel. Ele sente a perda da sua mãe todos os dias, ela era seu pilar, sua motivação para continuar e nunca desistir. Apesar de tentar se manter firme, ele não aguenta mais passar por toda essa dor sozinho.<p> Gabriel procura ajuda?";
    botao1.innerHTML = "SIM";
    botao2.innerHTML = "NÃO";
}

function decisao6(opcao){
    if(opcao == 1){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_fim_de_uma_jornada");
    }else if(opcao == 2){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_fim_de_uma_jornada");
    }
}

function cenario8(){
    cenario = 8;
    titulo.innerHTML = "UMA BOLA DE NEVE";
    texto.innerHTML = "Gabriel é preso com direito à fiança, mas como sua família não possui o dinheiro, ele cumpre seus 5 anos de pena. Ao cumprir sua sentença, volta para casa e recebe a notícia de que sua mãe foi diagnosticada com câncer, numa tentativa desesperada de conseguir dinheiro, ele volta a traficar.<br> Infelizmente, apesar de todos os esforços, sua mãe morre. Gabriel se encontra confuso, foi contra todos os princípios que foram ensinados pela sua mãe. O peso na consciência chega.<p> Diante disso, o que ele faz?";
    botao1.innerHTML = "CONTINUA A VENDER DROGAS";
    botao2.innerHTML = "DECIDE PARAR DE VENDER";
}

function decisao8(opcao){
    if(opcao == 1){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_O_LADO_OCULTO_DA_MOEDA");
    }else if(opcao == 2){
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
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_uma_luz");
    }else if(opcao == 2){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_fim_de_uma_jornada");
    }
}