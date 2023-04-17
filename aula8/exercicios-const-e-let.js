/* 
Alexandre Donisete tem 22 anos, pesa 83.80 kg 
tem 1.74 de altura e seu IMC é de 27.7
Alexandre nasceu em 2000 
*/
const nome = 'Alexandre';
const sobrenome = 'Donisete';
const idade = 22;
const peso = 83.80;
const alturaEmMetros = 1.74;
let indiceMassaCorporal; // peso / (altura * altura)
indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento;
anoNascimento = (2022 - idade);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`); // Nessa linha e adiante, farei em template de strings. Ao fazer dessa forma, deve-se abrir e fechar as strings com crases.
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`); 
console.log(`${nome} nasceu em ${anoNascimento}`); 