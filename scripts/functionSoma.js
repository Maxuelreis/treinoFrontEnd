// Função para somar  valores
var primeiroValor = document.getElementById("primeiroValor");
var segundoValor = document.getElementById("segundoValor");
var resultado = document.getElementById("resultado");
var botao = document.getElementById("somar");
botao.addEventListener("click",function(event){
    event.preventDefault();
    var pv = parseInt(primeiroValor.value);
    var sv = parseInt(segundoValor.value);
    var sm = pv + sv;
    resultado.value = sm;  
}); 

// Função para subtrair valores
var primeiroValor = document.getElementById("primeiroValor");
var segundoValor = document.getElementById("segundoValor");
var resultado = document.getElementById("resultado");
var botao = document.getElementById("subtrair");
botao.addEventListener("click",function(event){
    event.preventDefault();
    var pv = parseInt(primeiroValor.value);
    var sv = parseInt(segundoValor.value);
    var sbtr = pv - sv;
    resultado.value = sbtr;  
}); 

// Função para multiplicar valores
var primeiroValor = document.getElementById("primeiroValor");
var segundoValor = document.getElementById("segundoValor");
var resultado = document.getElementById("resultado");
var botao = document.getElementById("multiplicar");
botao.addEventListener("click",function(event){
    event.preventDefault();
    var pv = parseInt(primeiroValor.value);
    var sv = parseInt(segundoValor.value);
    var mlt = pv * sv;
    resultado.value = mlt;  
}); 


// Função para dividir valores
var primeiroValor = document.getElementById("primeiroValor");
var segundoValor = document.getElementById("segundoValor");
var resultado = document.getElementById("resultado");
var botao = document.getElementById("dividir");
botao.addEventListener("click",function(event){
    event.preventDefault();
    var pv = parseInt(primeiroValor.value);
    var sv = parseInt(segundoValor.value);
    if(sv == 0){
        window.alert("Operação impossível");
    }else{
        var divs = pv / sv
    }
    
    resultado.value = divs;  
}); 


// Função para limpar resultados anteriores




