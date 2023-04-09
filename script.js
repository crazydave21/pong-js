import Ball from "./ball.js";
import Paddle from "./paddle.js";
let canvas = document.getElementById('window');
let ctx = canvas.getContext('2d');
let GAME_WIDTH = 450;
let GAME_HEIGHT = 600;

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ball.draw(ctx);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);