let canvas = document.querySelector("#snake");
let context = canvas.getContext("2d");
let box = 32;
let pontuation = 0 ;

var snake = [{
    "x": 8 * box, 
    "y": 8 * box
}];

let food = [{
    x: Math.floor(Math.random() *  15 )* box,
    y: Math.floor(Math.random() * 15 ) * box
}];

console.log(food.x)

let direction;

function criarBG(){
    context.fillStyle = "#F2CA50";
    context.fillRect(0 , 0 ,16 * box, 16 * box);
}

function criarCobrinha(){
    for(var i = 0; i<snake.length;i++ ){
        context.fillStyle = "#027333";
        context.fillRect(snake[i].x, snake[i].y , box , box);

    }
}

function drawFood(){
    context.fillStyle = "#D9042B";
    context.fillRect(food[0].x,food[0].y, box, box);
}


document.addEventListener('keydown',update);

function update(event){

    if(event.keyCode==37 && direction !="right") direction="left"
    if(event.keyCode==38 && direction !="down") direction="up"
    if(event.keyCode==39 && direction !="left") direction="right"
    if(event.keyCode==40 && direction !="up") direction="down"
}


function iniciarJogo(){

    for(let i = 1 ; i < snake.length;i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            
            alert(`Game Over \n a sua pontuação foi : ${pontuation}`);
            clearInterval(jogo);
            location.reload();
        }
    }

    if(snake[0].x > 15 * box && direction=="right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 15 * box;
    if(snake[0].y > 15 * box && direction=="down") snake[0].y = 0;
    if(snake[0].y <0 && direction=="up") snake[0].y = 15 * box;

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction=="right") snakeX +=box;
    if(direction=="left") snakeX -= box;
    if(direction=="up") snakeY -= box;
    if(direction=="down") snakeY += box;

    if(snakeX != food[0].x || snakeY != food[0].y){
        snake.pop();
    }else{
        pontuation += 1;
        food[0].x = Math.floor(Math.random() *  15 +1)* box;
        food[0].y = Math.floor(Math.random() * 15 +1) * box;
    }

    let newHead = {
        x: snakeX ,
        y: snakeY
    }
    snake.unshift(newHead)
}

let jogo = setInterval(iniciarJogo,100);