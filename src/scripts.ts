class Calculadora {
    elementoDisplay: HTMLInputElement;
    entradaAtual: string = '';

    constructor(elementoDisplay: HTMLInputElement) {
        this.elementoDisplay = elementoDisplay;
        this.vincularEventos();
    }
}