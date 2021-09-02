let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //32pixels cada quadrado
let snake = [];

//aqui eu passo o que vai ter dentro do array snake
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

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

//atualizar o jogo de tempos em tempos pra que a cobrinha ande
//passar todas as funções pra quando iniciar, criar o background e criar a cobrinha
function iniciarJogo() {
    criarBG();
    criarCobrinha();  
    
    //ponto de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //por onde ela vai andar - -> aumenta <- diminui
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeX += box;

    //função pop retira o último elemento do array
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    //unshift sempre acrescenta a frente
    snake.unshift(newHead);
}

//100ms para iniciar e renovar o jogo
let jogo = setInterval(iniciarJogo, 100);