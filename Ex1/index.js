//Função que recebe 2 números e retorna o maior valor entre eles

function comparar(num1, num2){
    if(num1 > num2){
        return console.log(`${num1} é maior que ${num2}`);
    }else if (num2 > num1){
        return console.log(`${num2} é maior que ${num1}`);
    }else {
        return console.log('Os dois números são iguais!');
    }
}

comparar(25,25);