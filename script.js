var input_01 = document.getElementById(`input_01`);
var input_02 = document.getElementById(`input_02`);
var r = document.getElementById(`imc_result`);

var r1 = document.getElementById(`result_01`);
var r2 = document.getElementById(`result_02`);
var r3 = document.getElementById(`result_03`);
var r4 = document.getElementById(`result_04`);
var r5 = document.getElementById(`result_05`);
var r6 = document.getElementById(`result_06`);

function calculate() {
    var ac = Number(input_01.value);
    var p = Number(input_02.value);
    var am = ac / 100;
    
    var imc = p / (am ** 2);

   if (imc < 18.5) {
        r.innerText = imc.toFixed(1);
        r.style.color = `rgba(0, 255, 240, 1)`;
        r1.style.backgroundColor = `rgba(0, 255, 240, 0.5)`;

        r2.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r3.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r4.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r5.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r6.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
    } 
    
    if (imc >= 18.5 && imc <= 24.9) {
        r.innerText = imc.toFixed(1);
        r.style.color = `rgba(31, 234, 0, 1)`;
        r2.style.backgroundColor = `rgba(31, 234, 0, 0.5)`;

        r1.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r3.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r4.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r5.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r6.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
    }

    if (imc >= 25 && imc <= 29.9) {
        r.innerText = imc.toFixed(1);
        r.style.color = `rgba(255, 214, 0, 1)`;
        r3.style.backgroundColor = `rgba(255, 214, 0, 0.5)`;

        r2.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r1.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r4.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r5.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r6.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
    }
    if (imc >= 30 && imc <= 34.9) {
        r.innerText = imc.toFixed(1);
        r.style.color = `rgba(255, 92, 0, 1)`;
        r4.style.backgroundColor = `rgba(255, 92, 0, 0.5)`;

        r2.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r3.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r1.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r5.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r6.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
    }
    if (imc >= 35 && imc <= 39.9) {
        r.innerText = imc.toFixed(1);
        r.style.color = `rgba(255, 0, 0, 1)`;
        r5.style.backgroundColor = `rgba(255, 0, 0, 0.5)`;

        r2.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r3.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r4.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r1.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r6.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
    }
    if (imc >= 40) {
        r.innerText = imc.toFixed(1);
        r.style.color = `rgba(153, 13, 13, 1)`;
        r6.style.backgroundColor = `rgba(55, 4, 4, 0.5)`;

        r2.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r3.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r4.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r5.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
        r1.style.backgroundColor = `rgba(30, 30, 30, 0.5)`;
    }

    document.getElementById("card_02").scrollIntoView({behavior: 'smooth'});
}