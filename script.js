function insert(num) {
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calculate() {
    var resultado = document.getElementById('result').innerHTML;
    if (resultado) {
        document.getElementById('result').innerHTML = eval(resultado);
    }
}

function dark_mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function linkedin(){
    document.getElementById('result').innerHTML = "Itallo Ferreira";
}
