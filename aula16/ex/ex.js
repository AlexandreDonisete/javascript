                                    //Usando let e sem getElementById
// let inputNumb = prompt('Digite um número');
// inputNumb = Number(inputNumb)
// document.body.innerHTML +=`<h1>Seu número é: ${inputNumb}</h1> <br>`;
// document.body.innerHTML +=`<strong>Raiz quadrada: ${inputNumb * 0.5}</strong> <br>`;
// document.body.innerHTML +=`<strong>${inputNumb} é inteiro: ${Number.isInteger(inputNumb)}</strong> <br>`;
// document.body.innerHTML +=`<strong>É NaN: ${Number.isNaN(inputNumb)}</strong> <br>`;
// document.body.innerHTML +=`<strong>Arredongando para baixo é: ${Math.floor(inputNumb)}</strong> <br>`;
// document.body.innerHTML +=`<strong>Arredongando para cima é: ${Math.ceil(inputNumb)}</strong> <br>`;
// document.body.innerHTML +=`<strong>Com duas casas decimais: ${inputNumb.toFixed(2)}</strong> <br>`;

                                    //Usando const com getElementById e diferentes id's
// const numero = Number(prompt('Digite um número:'));
// const numeroTitulo = document.getElementById('numero-titulo');
// const raizQuadrada = document.getElementById('raiz-quadrada');
// const numeroInteiro = document.getElementById('numero-inteiro');
// const notANumb = document.getElementById('not-a-numb');
// const arredondarBaixo = document.getElementById('arredondar-baixo');
// const arredondarCima = document.getElementById('arredondar-cima');
// const casaDecimal = document.getElementById('casa-decimal');

// numeroTitulo.innerHTML = numero;
// raizQuadrada.innerHTML +=`<strong><p>Raiz quadrada: ${numero * 0.5}</p></strong> <br>`;
// numeroInteiro.innerHTML +=`<strong><p>${numero} é inteiro: ${Number.isInteger(numero)}</p></strong> <br>`;
// notANumb.innerHTML +=`<strong><p>É NaN: ${Number.isNaN(numero)}</p></strong> <br>`;
// arredondarBaixo.innerHTML +=`<strong><p>Arredondado para baixo é: ${Math.floor(numero)}</p></strong> <br>`;
// arredondarCima.innerHTML +=`<strong><p>Arredondado para cima é: ${Math.ceil(numero)}</p></strong> <br>`;
// casaDecimal.innerHTML +=`<strong><p>Com duas casas decimais: ${numero.toFixed(2)}</p></strong> <br>`;


                                    //Usando const com getElementById e um único id 
const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero

texto.innerHTML = '';
texto.innerHTML += `<strong><p>O seu número é: ${numero}</p></strong> <br>`;
texto.innerHTML += `<strong><p>Raiz quadrada: ${numero * 0.5}</p></strong> <br>`;
texto.innerHTML += `<strong><p>${numero} é inteiro: ${Number.isInteger(numero)}</p></strong> <br>`;
texto.innerHTML += `<strong><p>É NaN: ${Number.isNaN(numero)}</p></strong> <br>`;
texto.innerHTML += `<strong><p>Arredondado para baixo é: ${Math.floor(numero)}</p></strong> <br>`;
texto.innerHTML += `<strong><p>Arredondado para cima é: ${Math.ceil(numero)}</p></strong> <br>`;
texto.innerHTML += `<strong><p>Com duas casas decimais: ${numero.toFixed(2)}</p></strong> <br>`;