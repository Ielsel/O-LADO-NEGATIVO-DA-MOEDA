var scene;
var headTitle = document.getElementById("headTitle");
var headText = document.getElementById("headText");
var Option1 = document.getElementById("Option1");
var Option2 = document.getElementById("Option2");

scene0();

function response(option){
    switch(scene){
        case 0: decision0(option); break; 
        case 1: decision1(option); break; 
        case 2: decision2(option); break; 
        case 3: decision3(option); break; 
        case 4: decision4(option); break; 
        case 5: decision5(option); break; 
        case 6: decision6(option); break; 
        case 7: decision7(option); break; 
    }
}


function scene0(){
    scene = 0;
    headTitle.innerHTML = "A PROPOSTA";
    headText.innerHTML = "Gabriel acorda cedo e começa a coletar latinhas recicláveis para conseguir vender e se alimentar. Otávio, um antigo amigo de Gabriel, lhe oferece uma solução mais lucrativa: tráfico de drogas <p> O que Gabriel faz?";
    Option1.innerHTML = "ACEITAR A PROPOSTA"; 
    Option2.innerHTML = "RECUSAR A PROPOSTA";
}

function decision0(option){
    if(option == 1){
        scene1();
    }else if(option == 2){
        scene2();
    }
}

function scene1(){
    scene = 2;
    headTitle.innerHTML = "SEGREDO REVELADO";
    headText.innerHTML = "Com o passar do tempo, a família de Gabriel desconfia do fluxo de dinheiro entrando em sua casa, investigam de onde ele vem. Quando descobrem, decepcionados, pedem para que Gabriel pare de vender drogas.<br>Gabriel encontra-se em um dilema: Caso pare, talvez não tenha dinheiro nem para comer ou caso continue, é possivel que seja pego pela polícia e assim irá entristecer sua família ainda mais.<p> Sabendo disso, o que Gabriel decide fazer?";
    Option1.innerHTML = "PARAR DE VENDER DROGAS";
    Option2.innerHTML = "CONTINUAR VENDENDO SENDO MAIS DISCRETO";
}

function decision1(option){
    if(option == 1){
        scene2();
    }else if(option == 2){
        scene3();
    }
}

function scene2(){
    scene = 2;
    headTitle.innerHTML = "A SITUAÇÃO PIORA";
    headText.innerHTML = "Após ouvir sua família, ele volta a colher reciclagem. Apesar de seus pais viverem de \"bico\" e precisarem do máximo de ajuda possível, eles pedem que Gabriel comece a estudar, já que essa é provavelmente a única solução para que eles alcancem uma vida melhor futuramente.<br>Consequentemente, a situação ficará mais difícil, já que ele terá menos tempo para trabalhar.<p> Gabriel decide começar a estudar?";
    Option1.innerHTML = "SIM";
    Option2.innerHTML = "NÃO";
}

function decision2(option){
    if(option == 1){
        scene4();
    }else if(option == 2){
        scene5();
    }
}

function scene3(){
    scene = 3;
    headTitle.innerHTML = "EM FLAGRANTE";
    headText.innerHTML = "Após decidir continuar a vender, Gabriel passa a ser mais discreto para que sua família não perceba. Porém, um certo dia, ele é pego em flagrante pela polícia, que o dá voz de prisão.<p> Qual decisão Gabriel toma?";
    Option1.innerHTML = "TENTAR FUGIR";
    Option2.innerHTML = "FICAR E SER PRESO";
}

function decision3(option){
    if(option == 1){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_tragico_fim");
    }else if(option == 2){
        scene6();
    }
}

function scene4(){
    scene = 4;
    headTitle.innerHTML = "UMA GRANDE PERDA";
    headText.innerHTML = "Gabriel se esforça bastante na escola em uma tentativa desesperada de conseguir dar uma vida melhor para sua família. Porém, após alguns anos, a mãe de Gabriel é diagnosticada com câncer e apesar de todos os esforços da família para conseguir dinheiro para o tratamento, ela falece.<br>Ele, agora, se encontra confuso e sem um rumo na vida. Cogitando largar os estudos para trabalhar mais e a história não se repetir.<p> Gabriel decide mesmo parar de estudar?";
    Option1.innerHTML = "SIM";
    Option2.innerHTML = "NÃO";
}

function decision4(option){
    if(option == 1){
        scene7();
    }else if(option == 2){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_promissor");
    }
}

function scene5(){
    scene = 5;
    headTitle.innerHTML = "A SITUAÇÃO NÃO MUDA";
    headText.innerHTML = "Gabriel decide apenas trabalhar, mesmo que isso não mude a sua situação. Após alguns anos, a mãe de Gabriel é diagnosticada com câncer, e apesar de todos os esforços da família para conseguir dinheiro para o tratamento, ela falece.<br>Essa situação afetou absurdamente o psicológico de Gabriel. Ele sente a perda da sua mãe todos os dias, ela era seu pilar, sua motivação para continuar e nunca desistir. Apesar de tentar se manter firme, ele não aguenta mais passar por toda essa dor sozinho.<p> Gabriel procura ajuda?";
    Option1.innerHTML = "SIM";
    Option2.innerHTML = "NÃO";
}

function decision5(option){
    if(option == 1){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_fim_de_uma_jornada");
    }else if(option == 2){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_fim_de_uma_jornada");
    }
}

function scene6(){
    scene = 6;
    headTitle.innerHTML = "UMA BOLA DE NEVE";
    headText.innerHTML = "Gabriel é preso com direito à fiança, mas como sua família não possui o dinheiro, ele cumpre seus 5 anos de pena. Ao cumprir sua sentença, volta para casa e recebe a notícia de que sua mãe foi diagnosticada com câncer, numa tentativa desesperada de conseguir dinheiro, ele volta a traficar.<br> Infelizmente, apesar de todos os esforços, sua mãe morre. Gabriel se encontra confuso, foi contra todos os princípios que foram ensinados pela sua mãe. O peso na consciência chega.<p> Diante disso, o que ele faz?";
    Option1.innerHTML = "CONTINUA A VENDER DROGAS";
    Option2.innerHTML = "DECIDE PARAR DE VENDER";
}

function decision6(option){
    if(option == 1){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_O_LADO_OCULTO_DA_MOEDA");
    }else if(option == 2){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_sem_volta");
    }
}

function scene7(){
    scene = 7;
    headTitle.innerHTML = "DESESPERO";
    headText.innerHTML = "Apesar de dar tudo de si, as coisas não fluem e Gabriel se encontra bastante desanimado. Esse sentimento de insuficiência o abala muito, fazendo com que ele desenvolva uma depressão profunda. Ele não aguenta mais.<p>O que ele faz?";
    Option1.innerHTML = "DECIDE BUSCAR TRATAMENTO PSICOLÓGICO";
    Option2.innerHTML = "DECIDE CONTINUAR TENTANDO";
}

function decision7(option){
    if(option == 1){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_uma_luz");
    }else if(option == 2){
        window.location.href = "finals.html";
        localStorage.setItem("final", "final_fim_de_uma_jornada");
    }
}