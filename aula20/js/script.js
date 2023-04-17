function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        resultado.innerHTML += `<strong><p>Nome: ${nome.value}<br>Sobrenome: ${sobrenome.value}<br>Peso: ${peso.value} kg<br>Altura: ${altura.value} m</p></strong>`
        console.log(pessoas);
        
    }

    form.addEventListener('submit', recebeEventoForm);/**form.addEventListener adiciona um "escutador" de eventos. 
    Dentro do seu parenteses será atribuido um evento específico e uma função que executará alguma ação quando o evento em questão acontecer, por exemplo: form.addEventListener('evento', função).*/
}
meuEscopo();