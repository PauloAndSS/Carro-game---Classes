const petalAcele = document.getElementById("divPetalAcelerador");

const petalFreio = document.getElementById("divPetalFreio");

var aceleracao = 0; // Variável de controle
var intervalId;     // Identificador do intervalo
var tanque = 10;

// Evento quando o botão é pressionado
petalAcele.addEventListener("mousedown",
    acelerar(2,1,)
);

function verificaMouse(){

}

// Evento quando o botão é liberado
petalAcele.addEventListener("mouseup", () => {
    clearInterval(intervalId); // Para o intervalo usando `intervalId`
});

petalFreio.addEventListener("mousedown", () =>{
    intervalId = setInterval(()=> freiar(2), 50);
});

petalFreio.addEventListener("mouseup", () => {
    clearInterval(intervalId); // Para o intervalo usando `intervalId`
})

function ligarCarro(){

}

function acelerar(num, gasto = 0) {
        if(tanque < 0){
            return console.log("cabou a gasosa");
        }else if(gasto > tanque){
            return console.log("cabou a gasosa");
        }else{
            aceleracao += num; 
            tanque -= gasto;
            console.log("vruuum " + aceleracao);
        }
}

function freiar(num){
    if((num > aceleracao)){
        console.log("carro parado");
        clearInterval(intervalId);
    }else{
        aceleracao -= num; 
        console.log("iiiiirrrrrrrr " + aceleracao);
    }
}