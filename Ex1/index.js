//Função que recebe 2 números e retorna o maior valor entre eles


const max2 = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(max2(10, 5));


/*function comparar(num1, num2){
    if(num1 > num2){
        return console.log(`${num1} é maior que ${num2}`);
    }else if (num2 > num1){
        return console.log(`${num2} é maior que ${num1}`);
    }else {
        return console.log('Os dois números são iguais!');
}
comparar(25,25);
}*/


/*
Outra forma de realizar

function max(x, y){
    if(x > y){
        return x;
    } else{
        return y;
    }
}

const maior = max(10, 2);
console.log(maior);

==================================================

function max(x, y){
    if(x > y) return x;
    return y;
}

function max(x, y){
    return x > y ? : y;
}

====================================================

const max = (x, y) => {
    return x > y ? x: y;
}

*/
