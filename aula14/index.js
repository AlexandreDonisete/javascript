let num1 = 0.7; // number 
let num2 = 0.1; // number

// num1 = ((num1 * 100) + (num2 * 100)) / 100; (Diferentes Formas de transformar em um inteiro)
// num1 = ((num1 * 100) + (num2 * 100)) / 100;
// num1 = ((num1 * 100) + (num2 * 100)) / 100;

num1 = num1 + num2 // (Diferentes Formas de transformar em um inteiro)
num1 = num1 + num2
num1 = num1 + num2

num1 = Number(num1.toFixed(2)) // (Pode ser usado com parseFloat)

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2); (Transformar em string somente nessa linha)
// num1 = num1.toString (Transformar em String)
// console.log(num1.toString(2)); (Forma Binaria)
// console.log(num1.toFixed(4)); (Arredondar)
//console.log(Number.isInteger(num1)); (Para ver se é um número inteiro ou não)
// console.log(Number.isNaN(temp)); (Ver se a comta é ou não válida)
// let temp = num1 + `5`;

