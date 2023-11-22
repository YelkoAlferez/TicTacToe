var tablero = document.querySelector('.tablero');
const jugador = document.querySelector('.jugador');
var jugadorActual = jugador.textContent;
var numJugador = 1;
var simbolo = 'ඞ';
jugador.textContent = "Le toca a Jugador " + simbolo;


function cambiarColor(){
    const Celda1 = document.querySelector('.celda1');
    const celda1 = Celda1.textContent;
    const Celda2 = document.querySelector('.celda2');
    const celda2 = Celda2.textContent;
    const Celda3 = document.querySelector('.celda3');
    const celda3 = Celda3.textContent;
    const Celda4 = document.querySelector('.celda4');
    const celda4 = Celda4.textContent;
    const Celda5 = document.querySelector('.celda5');
    const celda5 = Celda5.textContent;
    const Celda6 = document.querySelector('.celda6');
    const celda6 = Celda6.textContent;
    const Celda7 = document.querySelector('.celda7');
    const celda7 = Celda7.textContent;
    const Celda8 = document.querySelector('.celda8');
    const celda8 = Celda8.textContent;
    const Celda9 = document.querySelector('.celda9');
    const celda9 = Celda9.textContent;
    if(numJugador == 1){
        if (celda1 == 'ඞ') {
            Celda1.style.color = 'red';
        }
        if (celda2 == 'ඞ') {
            Celda2.style.color = 'red';
        }
        if (celda3 == 'ඞ') {
            Celda3.style.color = 'red';
        }
        if (celda4 == 'ඞ') {
            Celda4.style.color = 'red';
        }
        if (celda5 == 'ඞ') {
            Celda5.style.color = 'red';
        }
        if (celda6 == 'ඞ') {
            Celda6.style.color = 'red';
        }
        if (celda7 == 'ඞ') {
            Celda7.style.color = 'red';
        }
        if (celda8 == 'ඞ') {
            Celda8.style.color = 'red';
        }
        if (celda9 == 'ඞ') {
            Celda9.style.color = 'red';
        }
    }
    else if(numJugador == 2){
        if (celda1 == 'Θ') {
            Celda1.style.color = 'brown';
        }
        if (celda2 == 'Θ') {
            Celda2.style.color = 'brown';
        }
        if (celda3 == 'Θ') {
            Celda3.style.color = 'brown';
        }
        if (celda4 == 'Θ') {
            Celda4.style.color = 'brown';
        }
        if (celda5 == 'Θ') {
            Celda5.style.color = 'brown';
        }
        if (celda6 == 'Θ') {
            Celda6.style.color = 'brown';
        }
        if (celda7 == 'Θ') {
            Celda7.style.color = 'brown';
        }
        if (celda8 == 'Θ') {
            Celda8.style.color = 'brown';
        }
        if (celda9 == 'Θ') {
            Celda9.style.color = 'brown';
        }
    }
}

function comprovarGanador() {
    const Celda1 = document.querySelector('.celda1');
    const celda1 = Celda1.textContent;
    const Celda2 = document.querySelector('.celda2');
    const celda2 = Celda2.textContent;
    const Celda3 = document.querySelector('.celda3');
    const celda3 = Celda3.textContent;
    const Celda4 = document.querySelector('.celda4');
    const celda4 = Celda4.textContent;
    const Celda5 = document.querySelector('.celda5');
    const celda5 = Celda5.textContent;
    const Celda6 = document.querySelector('.celda6');
    const celda6 = Celda6.textContent;
    const Celda7 = document.querySelector('.celda7');
    const celda7 = Celda7.textContent;
    const Celda8 = document.querySelector('.celda8');
    const celda8 = Celda8.textContent;
    const Celda9 = document.querySelector('.celda9');
    const celda9 = Celda9.textContent;
    if ((celda1 == 'Θ' && celda2 == 'Θ' && celda3 == 'Θ') || (celda1 == 'ඞ' && celda2 == 'ඞ' && celda3 == 'ඞ') || (celda4 == 'Θ' && celda5 == 'Θ' && celda6 == 'Θ')
        || (celda4 == 'ඞ' && celda5 == 'ඞ' && celda6 == 'ඞ') || (celda7 == 'Θ' && celda8 == 'Θ' && celda9 == 'Θ') || (celda7 == 'ඞ' && celda8 == 'ඞ' && celda9 == 'ඞ')
        || (celda1 == 'Θ' && celda5 == 'Θ' && celda9 == 'Θ') || (celda1 == 'ඞ' && celda5 == 'ඞ' && celda9 == 'ඞ')
        || (celda7 == 'Θ' && celda5 == 'Θ' && celda3 == 'Θ') || (celda7 == 'ඞ' && celda5 == 'ඞ' && celda3 == 'ඞ') || (celda1 == 'Θ' && celda4 == 'Θ' && celda7 == 'Θ')
        || (celda1 == 'ඞ' && celda4 == 'ඞ' && celda7 == 'ඞ') || (celda2 == 'Θ' && celda5 == 'Θ' && celda8 == 'Θ') || (celda2 == 'ඞ' && celda5 == 'ඞ' && celda8 == 'ඞ')
        || (celda3 == 'Θ' && celda6 == 'Θ' && celda9 == 'Θ') || (celda3 == 'ඞ' && celda6 == 'ඞ' && celda9 == 'ඞ')) {
            if(numJugador == 1){
                window.alert("Ha ganado el jugador ඞ!!!");
            }
            else{
                window.alert("Ha ganado el jugador Θ!!!");
            }
        document.location.reload('TicTacToe.html');
    }
    else if ((celda1 != '' && celda2 != '' && celda3 != '' && celda4 != '' && celda5 != '' && celda6 != '' && celda7 != '' && celda8 != '' && celda9 != '')) {
        window.alert("Empate, el juego continua hasta que uno gane.")
        if (numJugador == 1) {
            if (celda1 == 'ඞ') {
                Celda1.disabled = false;
            }
            else if(celda1 == 'Θ'){
                Celda1.disabled = true;
            }
            if (celda2 == 'ඞ') {
                Celda2.disabled = false;
            }
            else if(celda2 == 'Θ'){
                Celda2.disabled = true;
            }
            if (celda3 == 'ඞ') {
                Celda3.disabled = false;
            }
            else if(celda3 == 'Θ'){
                Celda3.disabled = true;
            }
            if (celda4 == 'ඞ') {
                Celda4.disabled = false;
            }
            else if(celda4 == 'Θ'){
                Celda4.disabled = true;
            }
            if (celda5 == 'ඞ') {
                Celda5.disabled = false;
            }
            else if(celda5 == 'Θ'){
                Celda5.disabled = true;
            }
            if (celda6 == 'ඞ') {
                Celda6.disabled = false;
            }
            else if(celda6 == 'Θ'){
                Celda6.disabled = true;
            }
            if (celda7 == 'ඞ') {
                Celda7.disabled = false;
            }
            else if(celda7 == 'Θ'){
                Celda7.disabled = true;
            }
            if (celda8 == 'ඞ') {
                Celda8.disabled = false;
            }
            else if(celda8 == 'Θ'){
                Celda8.disabled = true;
            }
            if (celda9 == 'ඞ') {
                Celda9.disabled = false;
            }
            else if(celda9 == 'Θ'){
                Celda9.disabled = true;
            }
        }
        else{
            if (celda1 == 'Θ') {
                Celda1.disabled = false;
            }
            else if(celda1 == 'ඞ'){
                Celda1.disabled = true;
            }
            if (celda2 == 'Θ') {
                Celda2.disabled = false;
            }
            else if(celda2 == 'ඞ'){
                Celda2.disabled = true;
            }
            if (celda3 == 'Θ') {
                Celda3.disabled = false;
            }
            else if(celda3 == 'ඞ'){
                Celda3.disabled = true;
            }
            if (celda4 == 'Θ') {
                Celda4.disabled = false;
            }
            else if(celda4 == 'ඞ'){
                Celda4.disabled = true;
            }
            if (celda5 == 'Θ') {
                Celda5.disabled = false;
            }
            else if(celda5 == 'ඞ'){
                Celda5.disabled = true;
            }
            if (celda6 == 'Θ') {
                Celda6.disabled = false;
            }
            else if(celda6 == 'ඞ'){
                Celda6.disabled = true;
            }
            if (celda7 == 'Θ') {
                Celda7.disabled = false;
            }
            else if(celda7 == 'ඞ'){
                Celda7.disabled = true;
            }
            if (celda8 == 'Θ') {
                Celda8.disabled = false;
            }
            else if(celda8 == 'ඞ'){
                Celda8.disabled = true;
            }
            if (celda9 == 'Θ') {
                Celda9.disabled = false;
            }
            else if(celda9 == 'ඞ'){
                Celda9.disabled = true;
            }
            
        }
    }
}

function marcarCelda1() {
    const Celda1 = document.querySelector('.celda1');
    const celda1 = Celda1.textContent;
    if (simbolo == 'Θ') {
        Celda1.textContent = simbolo;
        simbolo = 'ඞ';
    }
    else if (simbolo == 'ඞ') {
        Celda1.textContent = simbolo;
        simbolo = 'Θ';
    }
    console.log(simbolo);
    Celda1.disabled = true;
    comprovarGanador();
    cambiarColor();
    if (numJugador == 1) {
        numJugador = 2;
    }
    else {
        numJugador = 1;
    }
    jugador.textContent = "Le toca a Jugador " + simbolo;
}
function marcarCelda2() {
    const Celda2 = document.querySelector('.celda2');
    const celda2 = Celda2.textContent;
    if (simbolo == 'Θ') {
        Celda2.textContent = simbolo;
        simbolo = 'ඞ';
    }
    else if (simbolo == 'ඞ') {
        Celda2.textContent = simbolo;
        simbolo = 'Θ';
    }
    console.log(simbolo);
    Celda2.disabled = true;
    comprovarGanador();
    cambiarColor();
    if (numJugador == 1) {
        numJugador = 2;
    }
    else {
        numJugador = 1;
    }
    jugador.textContent = "Le toca a Jugador " + simbolo;
}
function marcarCelda3() {
    const Celda3 = document.querySelector('.celda3');
    const celda3 = Celda3.textContent;
    if (simbolo == 'Θ') {
        Celda3.textContent = simbolo;
        simbolo = 'ඞ';
    }
    else if (simbolo == 'ඞ') {
        Celda3.textContent = simbolo;
        simbolo = 'Θ';
    }
    console.log(simbolo);
    Celda3.disabled = true;
    comprovarGanador();
    cambiarColor();
    if (numJugador == 1) {
        numJugador = 2;
    }
    else {
        numJugador = 1;
    }
    jugador.textContent = "Le toca a Jugador " + simbolo;
}
function marcarCelda4() {
    const Celda4 = document.querySelector('.celda4');
    const celda4 = Celda4.textContent;
    if (simbolo == 'Θ') {
        Celda4.textContent = simbolo;
        simbolo = 'ඞ';
    }
    else if (simbolo == 'ඞ') {
        Celda4.textContent = simbolo;
        simbolo = 'Θ';
    }
    console.log(simbolo);
    Celda4.disabled = true;
    comprovarGanador();
    cambiarColor();
    if (numJugador == 1) {
        numJugador = 2;
    }
    else {
        numJugador = 1;
    }
    jugador.textContent = "Le toca a Jugador " + simbolo;
}
function marcarCelda5() {
    const Celda5 = document.querySelector('.celda5');
    const celda5 = Celda5.textContent;
    if (simbolo == 'Θ') {
        Celda5.textContent = simbolo;
        simbolo = 'ඞ';
    }
    else if (simbolo == 'ඞ') {
        Celda5.textContent = simbolo;
        simbolo = 'Θ';
    }
    console.log(simbolo);
    Celda5.disabled = true;
    comprovarGanador();
    cambiarColor();
    if (numJugador == 1) {
        numJugador = 2;
    }
    else {
        numJugador = 1;
    }
    jugador.textContent = "Le toca a Jugador " + simbolo;
}
function marcarCelda6() {
    const Celda6 = document.querySelector('.celda6');
    var celda6 = Celda6.textContent;
    if (simbolo == 'Θ') {
        Celda6.textContent = simbolo;
        simbolo = 'ඞ';
    }
    else if (simbolo == 'ඞ') {
        Celda6.textContent = simbolo;
        simbolo = 'Θ';
    }
    Celda6.disabled = true;
    comprovarGanador();
    cambiarColor();
    if (numJugador == 1) {
        numJugador = 2;
    }
    else {
        numJugador = 1;
    }
    jugador.textContent = "Le toca a Jugador " + simbolo;
}
function marcarCelda7() {
    const Celda7 = document.querySelector('.celda7');
    var celda7 = Celda7.textContent;
    if (simbolo == 'Θ') {
        Celda7.textContent = simbolo;
        simbolo = 'ඞ';
    }
    else if (simbolo == 'ඞ') {
        Celda7.textContent = simbolo;
        simbolo = 'Θ';
    }
    Celda7.disabled = true;
    comprovarGanador();
    cambiarColor();
    if (numJugador == 1) {
        numJugador = 2;
    }
    else {
        numJugador = 1;
    }
    jugador.textContent = "Le toca a Jugador " + simbolo;
}
function marcarCelda8() {
    const Celda8 = document.querySelector('.celda8');
    var celda8 = Celda8.textContent;
    if (simbolo == 'Θ') {
        Celda8.textContent = simbolo;
        simbolo = 'ඞ';
    }
    else if (simbolo == 'ඞ') {
        Celda8.textContent = simbolo;
        simbolo = 'Θ';
    }
    Celda8.disabled = true;
    comprovarGanador();
    cambiarColor();
    if (numJugador == 1) {
        numJugador = 2;
    }
    else {
        numJugador = 1;
    }
    jugador.textContent = "Le toca a Jugador " + simbolo;
    console.log(numJugador);
}
function marcarCelda9() {
    const Celda9 = document.querySelector('.celda9');
    var celda9 = Celda9.textContent;
    if (simbolo == 'Θ') {
        Celda9.textContent = simbolo;
        simbolo = 'ඞ';
    }
    else if (simbolo == 'ඞ') {
        Celda9.textContent = simbolo;
        simbolo = 'Θ';
    }
    Celda9.disabled = true;
    comprovarGanador();
    cambiarColor();
    if (numJugador == 1) {
        numJugador = 2;
    }
    else {
        numJugador = 1;
    }
    jugador.textContent = "Le toca a Jugador " + simbolo;
    console.log(numJugador);
}








