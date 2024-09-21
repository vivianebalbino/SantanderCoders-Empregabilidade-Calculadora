class Calculadora {
    elementoDisplay: HTMLInputElement;
    entradaAtual: string = '';

    constructor(elementoDisplay: HTMLInputElement) {
        this.elementoDisplay = elementoDisplay;
        this.vincularEventos();
    }

    vincularEventos() {
        const botoes = document.querySelectorAll('.btn');
        botoes.forEach(botao => {
            botao.addEventListener('click', () => this.aoClicarBotao(botao));
        });
    }
}