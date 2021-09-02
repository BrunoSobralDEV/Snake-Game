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
let food = {
    //criar nº aleatório pra aparecer em lugares distintos no mapa
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
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

//criar comida
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}
//evento de escuta - as teclas direcionais
document.addEventListener('keydown', update);

function update(event) { //37=direita,38=pra baixo
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

//atualizar o jogo de tempos em tempos pra que a cobrinha ande
//passar todas as funções pra quando iniciar, criar o background e criar a cobrinha
function iniciarJogo() {
    //atravessar a parede - voltar pro início
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    //gameOver
    for(i=1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            //parar jogo
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }
    
    criarBG();
    criarCobrinha();  
    drawFood();

    //ponto de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //por onde ela vai andar - -> aumenta <- diminui
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
    //função pop retira o último elemento do array
    snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    //unshift sempre acrescenta a frente
    snake.unshift(newHead);
}

//100ms para iniciar e renovar o jogo
let jogo = setInterval(iniciarJogo, 100);
