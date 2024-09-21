# Calculadora Simples

Este é um projeto de uma **calculadora simples** desenvolvida usando **HTML**, **CSS** e **TypeScript**. A calculadora realiza operações básicas como adição, subtração, multiplicação e divisão.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)


## Visão Geral

Este projeto é uma implementação simples de uma calculadora, com uma interface minimalista. O objetivo do projeto é servir como exemplo de integração entre TypeScript e um layout básico de calculadora em HTML e CSS.

A calculadora permite:

- Inserir números e operadores através dos botões.
- Realizar cálculos ao pressionar o botão de igual.
- Limpar o display com o botão "C".

## Funcionalidades

- **Operações básicas**: Adição (+), Subtração (-), Multiplicação (*) e Divisão (/).
- **Interface simples**: Desenvolvida para fácil entendimento e navegação.
- **Entrada do usuário**: Os valores e operadores são inseridos através de botões na interface.
- **Limpeza**: O botão "C" limpa o display e reseta a operação.
- **Tratamento de erros**: Exibe "Erro" no display em caso de falha nos cálculos.

## Tecnologias Utilizadas

- **HTML5**: Para estrutura e marcação da interface.
- **CSS3**: Para estilização e layout da calculadora.
- **TypeScript**: Para lógica de funcionamento da calculadora.

## Instalação

### Pré-requisitos

Para executar o projeto localmente, você precisará de:

- Um navegador web atualizado.
- Node.js instalado (para compilar TypeScript).

### Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/calculadora-simples.git

2. Navegue até a pasta do projeto:
   
    ```bash
    cd calculadora-simples

3. Instale o compilador TypeScript globalmente, se ainda não tiver:
   
   ```bash
   npm install -g typescript
   
4. Compile o arquivo TypeScript para JavaScript:
  ```bash
   tsc script.ts
```


5. Abra o arquivo index.html no navegador ou use uma extensão como Live Server para visualizar o projeto em tempo real.


## Como Usar

1. Digite os números e operadores diretamente pelos botões da interface.

2. Clique no botão "=" para calcular o resultado.

3. Use o botão "C" para limpar o display e começar uma nova operação.

## Estrutura do Projeto

├── index.html         # Arquivo HTML principal  
├── styles.css         # Arquivo CSS para estilização da calculadora  
├── script.ts          # Arquivo TypeScript para lógica da calculadora  
├── script.js          # Arquivo JavaScript compilado  
├── README.md          # Documentação do projeto  
└── tsconfig.json      # Configuração do compilador TypeScript  


