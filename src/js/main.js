let canvas = document.querySelector("#snake");
let context = canvas.getContext("2d");
let box = 32;

var snake = [{
    "x": 8 * box, 
    "y": 8 * box
}];


let direction ="right";

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0 , 0 ,16 * box, 16 * box);
}

function criarCobrinha(){
    for(var i = 0; i<snake.length;i++ ){
        
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y , box , box);
        console.log(snake[i]);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction=="right") snakeX +=box;
    if(direction=="left") snakeY -= box;
    if(direction=="up") snakeY -= box;
    if(direction=="down") snakeY += box;


    snake.pop(); 
    let newHead = {
        x: snakeX ,
        y: snakeY
    }

    snake.unshift(newHead)

}

let jogo = setInterval(iniciarJogo,100);