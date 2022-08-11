let inputRes = document.getElementById("inputCalculadora");

let calc = {
    valorSalvo: null,
    funcaoParaCalcular: null
}

window.addEventListener("load", function() {
    atribuirEventos();
})

function atribuirEventos(){
    document.getElementById("btnValor0").addEventListener("click", inserirNumero);
    document.getElementById("btnValor1").addEventListener("click", inserirNumero);
    document.getElementById("btnValor2").addEventListener("click", inserirNumero);
    document.getElementById("btnValor3").addEventListener("click", inserirNumero);
    document.getElementById("btnValor4").addEventListener("click", inserirNumero);
    document.getElementById("btnValor5").addEventListener("click", inserirNumero);
    document.getElementById("btnValor6").addEventListener("click", inserirNumero);
    document.getElementById("btnValor7").addEventListener("click", inserirNumero);
    document.getElementById("btnValor8").addEventListener("click", inserirNumero);
    document.getElementById("btnValor9").addEventListener("click", inserirNumero);
    document.getElementById("btnValorPonto").addEventListener("click", inserirPonto);
    document.getElementById("btnValorDividir").addEventListener("click", inserirOperador);
    document.getElementById("btnValorMultiplicar").addEventListener("click", inserirOperador);
    document.getElementById("btnValorSubtrair").addEventListener("click", inserirOperador);
    document.getElementById("btnValorSomar").addEventListener("click", inserirOperador);
    document.getElementById("btnLimpar").addEventListener("click", limparInput);
    document.getElementById("btnValorResultado").addEventListener("click", mostrarResultado);  
}

function inserirNumero(){
    if(isNaN(inputRes.value)){
        inputRes.value = event.target.textContent;
    }
    else if(inputRes.value === "0."){
        inputRes.value += event.target.textContent;
    }
    else{
        if(inputRes.value == 0){
            inputRes.value = event.target.textContent;
        }
        else{
            inputRes.value += event.target.textContent;
        }
    }
}

function inserirPonto(){
    if(inputRes.value === "" || isNaN(inputRes.value)){
        inputRes.value = "0.";
    }
    else if(!inputRes.value.includes(".")){
        inputRes.value += ".";
    }
}

function somar(valor1, valor2){
    return valor1 + valor2;
}

function subtrair(valor1, valor2){
    return valor1 - valor2;
}

function dividir(valor1, valor2){
    if(valor2 === 0){
        return "Erro: divisão por zero";
    }
    else{
        return valor1 / valor2;
    }
}

function multiplicar(valor1, valor2){
    return valor1 * valor2;
}

function limparInput(){
    inputRes.value = "";
    calc.valorSalvo = null;
    calc.funcaoParaCalcular = null;
}

function atribuirOperacao(operador){
    if(operador === "+"){
        calc.funcaoParaCalcular = somar;
    }
    else if(operador === "-"){
        calc.funcaoParaCalcular = subtrair;
    }
    else if(operador === "/"){
        calc.funcaoParaCalcular = dividir;
    }
    else{
        calc.funcaoParaCalcular = multiplicar;
    }
}

function inserirOperador(){
    if(!isNaN(inputRes.value)){
        if(calc.valorSalvo == null){
            calc.valorSalvo = Number(inputRes.value);
        }
        else if(calc.funcaoParaCalcular != null){
            calc.valorSalvo = calc.funcaoParaCalcular(calc.valorSalvo, Number(inputRes.value));
        }
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputRes.value = operador;
}

function mostrarResultado(){
    if(!isNaN(inputRes.value) && calc.funcaoParaCalcular != null){
        let resultado = calc.funcaoParaCalcular(calc.valorSalvo, Number(inputRes.value));
        inputRes.value = resultado;
        calc.valorSalvo = resultado;
        calc.funcaoParaCalcular = null;
    }
}
