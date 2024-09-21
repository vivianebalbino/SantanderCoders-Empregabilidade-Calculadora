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

    aoClicarBotao(botao: Element) {
        const valor = (botao as HTMLButtonElement).value;

        if (valor === '=') {
            this.calcular();
        } else if (valor === 'C') {
            this.limpar();
        } else {
            this.adicionarEntrada(valor);
        }
    }

    adicionarEntrada(valor: string) {
        this.entradaAtual += valor;
        this.atualizarDisplay();
    }

    atualizarDisplay() {
        this.elementoDisplay.value = this.entradaAtual;
    }

    calcular() {
        try {
            this.entradaAtual = eval(this.entradaAtual);
            this.atualizarDisplay();
        } catch (erro) {
            this.entradaAtual = 'Erro';
            this.atualizarDisplay();
        }
    }
    
    limpar() {
        this.entradaAtual = '';
        this.atualizarDisplay();
    }

}