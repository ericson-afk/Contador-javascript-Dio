var incrementBtn = document.getElementById("btn_incrementar");
var decrementBtn = document.getElementById("btn_decrementar");
var contBtn = document.getElementById("contador");
var contador = 0;

contBtn.innerHTML = contador;

incrementBtn.addEventListener('click', function () {
    contador++;
    contBtn.innerHTML = contador;
    
});

decrementBtn.addEventListener('click', function () {
    contador--;
    contBtn.innerHTML = contador;
});

