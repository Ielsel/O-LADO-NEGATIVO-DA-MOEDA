var final = localStorage.getItem("final");

switch (final){
    case "final_promissor":
        titulo.innerHTML = "UM FINAL PROMISSOR";
        texto.innerHTML = "Com o passar do tempo, Gabriel encontra diversas pessoas que o ajudam e incentivam a estudar e correr atrás dos seus sonhos. Com o incentivo dessas pessoas, ele consegue um emprego e aos 33 anos consegue se mudar com o resto de sua família e levar uma vida digna graças a seus esforços.";
        texto1.innerHTML = "VOCÊ VENCEU!<br>&#x1F601; &#x1F44F; &#x1F44F"

        botao2.innerHTML = "CONTINUAR";

        botao1.style.display = "none";
        imagem1.style.display = "block";
        texto1.style.display = "block";

        texto.style.fontSize = "25px";
        texto1.style.color = "#C6EF21";
        texto1.style.fontFamily = "lucida console";
        texto1.style.fontSize = "43px";

        imagem1.src = "https://i.imgur.com/u62ADXX.jpg";

        if(opcao == 1){
            //cenario16();
            window.location.href = "endgame.html";
        }
        break;
    
    case "final_tragico_fim":
        titulo.innerHTML = "UM TRÁGICO FIM.&#x2639&#xFE0F;";
        texto.innerHTML = "Gabriel tenta fugir, e apesar de correr o mais rápido que consegue, foi atingido por uma bala, caindo imediatamente. Largado e sozinho no chão, apenas a morte o faz companhia.";
        texto1.innerHTML = "VOCÊ PERDEU!&#x2620,&#xFE0F;"

        botao2.style.display = "block";
        imagem1.style.display = "block";
        texto1.style.display = "block";

        imagem1.src = "https://i.imgur.com/7yqDMlC.jpg";

        texto.style.fontSize = "25px";
        texto1.style.color = "#e50914";
        texto1.style.fontFamily = "chiller";
        texto1.style.fontSize = "43px";

        if(opcao == 1){
            //cenario1();
            window.location.href = "game.html";
        }else if(opcao == 2){
            //cenario16();
            window.location.href = "endgame.html";
        }
        break;

    case "final_fim_de_uma_jornada":
        titulo.innerHTML = "O FIM DE UMA JORNADA &#x2639&#xFE0F;";
        texto.innerHTML = "Gabriel, apesar de passar toda a sua vida lutando contra a pobreza, acaba não conseguindo alcançar os seus objetivos. Aos 33 anos, é infectado por uma grave amebíase, que, infelizmente, o leva a morte.";
        texto1.innerHTML = "VOCÊ PERDEU!&#x2620,&#xFE0F;";

        botao2.style.display = "block";
        imagem1.style.display = "block";
        texto1.style.display = "block";

        texto.style.fontSize = "25px";
        texto1.style.color = "#e50914";
        texto1.style.fontFamily = "chiller";
        texto1.style.fontSize = "43px";

        imagem1.src = "https://i.imgur.com/fTbXibh.jpg";

        if(opcao == 1){
            //cenario1();
            window.location.href = "game.html";
        }else if(opcao == 2){
            //cenario16();
            window.location.href = "endgame.html";
        }

        break;

    case "final_sem_volta":
        titulo.innerHTML = "O FIM";
        texto.innerHTML = "Gabriel, após deixar a vida do crime, tenta levar uma conversa com seus fornecedores. Isso não acaba nada bem, já que ele tinha uma grande dívida, e para pagá-la deveria continuar traficando. Gabriel recusa e oferece pagar a dívida de forma honesta, porém em um maior período de tempo, a proposta não é muito bem aceita. Após decidir deixar o local e ir para casa, Gabriel é baleado na testa pelos homens a quem devia dinheiro.";
        texto1.innerHTML = "VOCÊ PERDEU!&#x2620,&#xFE0F;";

        botao1.innerHTML = "TENTAR NOVAMENTE";
        botao2.innerHTML = "ENCERRAR O JOGO";

        botao2.style.display = "block";
        imagem1.style.display = "block";
        texto1.style.display = "block";

        imagem1.src = "https://i.imgur.com/7yqDMlC.jpg";

        texto.style.fontSize = "25px";
        texto1.style.color = "#e50914";
        texto1.style.fontFamily = "chiller";
        texto1.style.fontSize = "43px";
    

        if(opcao == 1){
            //cenario1();
            window.location.href = "game.html";
        }else if(opcao == 2){
            //cenario16();
            window.location.href = "endgame.html";
        }

        break;
    
    case "final_O_LADO_OCULTO_DA_MOEDA":
        titulo.innerHTML = "O FIM";
        texto.innerHTML = "Gabriel, apesar de muita relutância, decide continuar no tráfico. As coisas estavam indo de acordo com o planejado, nenhuma suspeita vinda de sua família. O que Gabriel não esperava, é que mais alguém o observava. <br> Gabriel, que portava cerca de 5kg de drogas escondidas, é interceptado pela polícia, que ao invés de simplesmente o prender, toma uma drástica decisão: matá-lo. Gabriel leva 3 tiros em suas costas, o que o derruba imediatamente, em seus últimos momentos de vida, percebe o lado negativo da moeda.";
        texto1.innerHTML = "VOCÊ PERDEU!&#x2620,&#xFE0F;";

        botao1.innerHTML = "TENTAR NOVAMENTE";
        botao2.innerHTML = "ENCERRAR O JOGO";

        botao2.style.display = "block";
        imagem1.style.display = "block";
        texto1.style.display = "block";

        imagem1.src = "https://i.imgur.com/7yqDMlC.jpg";

        texto.style.fontSize = "25px";
        texto1.style.color = "#e50914";
        texto1.style.fontFamily = "chiller";
        texto1.style.fontSize = "43px";


        if(opcao == 1){
            //cenario1();
            window.location.href = "game.html";
        }else if(opcao == 2){
            //cenario16();
            window.location.href = "endgame.html";
        }

        break;

    case "final_uma_luz":
        titulo.innerHTML = "UMA LUZ NO FIM DO TÚNEL";
        texto.innerHTML = "Gabriel encontra uma ONG que o interna em uma clínica especializada onde recebeu o tratamento psicológico que precisava, com o passar do tempo ele percebeu que seus problemas poderiam tê-lo levado a um outro final mais trágico. <br>Agora, Gabriel procura conscientizar as pessoas sobre a importância da vida e de seguir o caminho da lei.";
        texto1.innerHTML = "VOCÊ VENCEU!<br>&#x1F601; &#x1F44F; &#x1F44F;";

        botao1.innerHTML = "CONTINUAR";

        botao2.style.display = "none";
        imagem1.style.display = "block";
        texto1.style.display = "block";

        imagem1.src = "https://i.imgur.com/pfR9fBr.jpg";

        texto.style.fontSize = "25px";
        texto1.style.color = "#C6EF21";
        texto1.style.fontFamily = "lucida console";
        texto1.style.fontSize = "43px";
  
        if(opcao == 1){
            //cenario16();
            window.location.href = "endgame.html";
        }
        
        break;

    default: 
        print("ocurrent error");
}