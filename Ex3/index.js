//Escrever uma função que recebe um número e retorne uma das opções:
//Se for Divisível por 3 = Fizz
//Se for Divisível por 5 = Buzz
//Se for Divisível por 3 e 5 == FizzBuzz
//Se não for Divisível por 3 e 5 = Retorna o Própio Número
//Checar se o número é realmente um número = Retorna o Própio Valor
//Use a função com números de 0 a 100

function fizzBuzz(num){
    if (typeof num != 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}

for (let i =0; i <=100; i++){
    console.log(i, fizzBuzz(i));
}