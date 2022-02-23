var input_01 = document.getElementById(`input_01`);
var input_02 = document.getElementById(`input_02`);
var r = document.getElementById(`imc_result`);

function calculate() {
    var a = Number(input_01.value);
    var p = Number(input_02.value);
    
    var imc = p / (a ** 2);
}