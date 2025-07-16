//Escrever uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//Retornar true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura ? true : false;

console.log(ePaisagem(1280, 720))