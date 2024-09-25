const contandor = document.querySelector("#contando");
const transicao = document.querySelector(".transicao");

let tempoRestante = 1000;

const intervalo = setInterval(() => {
    contandor.textContent = tempoRestante;

    if (tempoRestante === 1) {
        clearInterval(intervalo); 
        window.location.href = 'home.html'; // Redireciona para home.html
    } else {
        tempoRestante--; 
    }
}, 1000);

let tempoTransicao = 0;

setInterval(() => {
    if (tempoTransicao === 0) {
        tempoTransicao++;
    } else {
        tempoTransicao--;
    }
}, 500);
