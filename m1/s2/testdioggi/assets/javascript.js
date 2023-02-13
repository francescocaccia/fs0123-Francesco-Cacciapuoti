function aggiungiSimbolo(elemento) {



    let simbolo = elemento.getAttribute('data-simbolo');

    let display = document.querySelector('#display');
    display.value += simbolo;//display.value= display.value + simbolo
}

function totale() {
    let display = document.querySelector('#display');

    display.value = eval(display.value);
}

function reset() {
    let display = document.querySelector('#display');
    display.value = '';
}

function percen() {
    let display = document.querySelector('#display');
    display.value = '';
}

function invocation() {

    let display = document.querySelector('#display');

    let Invocazione = display.value;

    if (Invocazione === '66') {
        window.open("./assets/tenaciousD.mp4", "popupWindow", "width=800,height=600")
    }
}

function del () {
        let display = document.querySelector('#display');
        let currentValue = display.value;
        if (currentValue.length > 0) {
display.value = currentValue.substring(0, currentValue.length - 1);
        }
    }
