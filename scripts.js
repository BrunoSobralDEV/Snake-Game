let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //32pixels cada quadrado

function ciarBG() {
    context.fillStyle = "lightgreen"; //cor do Background
    context.fillReact(0, 0, 16 * box, 16 * box); //retângulo-x,y,altura,largura
}

criarBG();