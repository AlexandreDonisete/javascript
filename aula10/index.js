/**
 * Operadores aritméticos
 * Serve para adição e Concatenação dependedo do tipo de dado (+)
 * Subtração (-) Divisão (/) Multiplicação (*) Potenciação (**)
 * Resto da Divisão (%)
 */
const num1 = 5;
const num2 = 10;
const num3 = 15;
console.log(num1 + num2 - num3 * num1 ** num3 / num2 % num3 )

/**
 * Ordem dos operadores 
 * Tudo que está dentro do parenteses tem prioridade
 * Primeiro ** (Potenciação) , depois * (Multiplicação), / (Divisão), % (Resto da Divisão), Adição (+) e Subtração (-)
 */

let contador = 1;
contador++; // Nesse caso, usarei o operador de incremento (++) na variável "contador" para que seja incrementado +1 ao valor dela, resultado em 2
contador++; // Repetindo o processo, será incrementando +1 ao valor atual dela, resultando em 3. Basta repetir o operador de incremento para que seja acrescentado +1 ao valor da variável. 

/** O operador de incremento (++) pode tanto pós como pré fixado. Exemplo: contador++ ou ++contador. 
 * A diferença entre eles é que o pré-fixado primeiro incrementará o valor e depois retornará o valor. Já o pós-fixado primeiro executará o valor da variável e depois efetuará o incremento.
 */
/** Pode-se usar também o operador de DECREMENTO (--) */
/** Para incrementar valores maiores que um, use os operadores de atribuição (operador seguido do sinal de igual) 
Exemplo: contador += 3 (Nesse caso será incrementando de 3 em 3) */

/** Existem 3 formas de converter uma string em number
 * A primera é utilizando a função parseInt (tranforma em inteiro).
 * A seugnda é utilizando a função parseFloat (transforma com casas decimais).
 * A terceira é utilizando a função Number (Nesse caso, não faz distinção de casas decimais ou inteiros.)
 * Funciona apenas para números.
*/

