
//pegando o elemento HTML dos botões
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//identificar click
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // desmarcar botão selecioando anterior
        destativarBotaoSelecionado();

        //marcar o botão clicado como selecionado
        botao.classList.add('selecionado');

        //escondendo a imagem ativa
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //exibindo imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    })
})



function destativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

