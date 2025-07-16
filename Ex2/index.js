//Escrever uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//Retornar true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1280, 720))

/*
Outras formas:
const ePaisagem = (largura, altura) => {
    return largura > altura;
}

===========================================================

function ePaisagem(largura, altura) {
    return largura > altura;
}

*/
