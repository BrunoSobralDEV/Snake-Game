let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //32pixels cada quadrado
let snake = [];

//aqui eu passo o que vai ter dentro do array snake
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "lightgreen"; //cor do Background
    context.fillRect(0, 0, 16 * box, 16 * box); //retângulo-x,y,altura,largura
}

//for para percorrer todo o array snake
function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green"; //cor
        context.fillRect(snake[i].x, snake[i].y, box, box) //tamanho - passado no array x e y (como 8) e box tamanho do quadrado
    }
}

criarBG();
criarCobrinha();