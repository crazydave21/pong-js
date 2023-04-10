import Ball from "./ball.js";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
let canvas = document.getElementById('window');
let ctx = canvas.getContext('2d');
let GAME_WIDTH = 450;
let GAME_HEIGHT = 600;


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT, paddle);
new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, 450, 600);

    ball.draw(ctx);
    ball.update(deltaTime);
    paddle.draw(ctx);
    paddle.update(deltaTime);

    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);