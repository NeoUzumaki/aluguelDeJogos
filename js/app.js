/*
 ________Minha Resolucção________
function alterarStatus(ref){
    let botao = document.getElementById(`bt-${ref}`);
    let img = document.getElementById(`img-${ref}`);

    // troca das classes dos botões
    if (botao.classList.contains('dashboard__item__button--return') || img.classList.contains('dashboard__item__img--rented')){
        botao.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
        botao.innerHTML = 'Alugar';
    } else if (!botao.classList.contains('dashboard__item__button--return') || !img.classList.contains('dashboard__item__img--rented')){
        botao.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
        botao.innerHTML = 'Devolver';
    }
}

function exibirTexto (img){
    let campo = document.querySelector(img);
    campo.innerHTML = texto;
}
    _________Resolução dos Professores___________
*/

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagen = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagen.classList.contains('dashboard__item__img--rented')){
        imagen.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagen.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
