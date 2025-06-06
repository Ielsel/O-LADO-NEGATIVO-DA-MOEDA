var cenario = 17

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

// Créditos
function cenario17(){

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
        //cenario1();
        window.location.href = '../index.html'
    }
}