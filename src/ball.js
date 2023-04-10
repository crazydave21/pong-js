export default class Ball {
    constructor(gameWidth, gameHeight, paddle, score) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.paddle = paddle;
        this.score = score;

        this.size = 10;

        this.position = {
            x: 0,
            y: 0,
        }

        this.speed = {
            x: 0.2,
            y: 0.2,
        }
    }

    draw(ctx) {
        //draw ball on canvas
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);

    }

    update(deltaTime) {

        //move ball around canvas
        this.position.x += this.speed.x * deltaTime;
        this.position.y += this.speed.y * deltaTime;

        //collision detection x-axis
        if (this.position.x + this.size >= this.gameWidth || this.position.x <= 0) this.speed.x = -this.speed.x;

        //calculate player 1 score
        if (this.position.y <= 0) {
            this.speed.y = -this.speed.y;
            this.score.p1Score();
        }

        //calculate player 2 score
        if (this.position.y + this.size >= this.gameHeight) {
            this.speed.y = -this.speed.y;
            this.score.p2Score();
        }

        let bottomBall = this.position.y + this.size;
        let p1paddleTop = this.paddle.p1position.y;
        let p1paddleLeft = this.paddle.p1position.x;
        let p1paddleRight = this.paddle.p1position.x + this.paddle.width;

        let topBall = this.position.y;
        let p2paddleBottom = this.paddle.p2position.y + this.paddle.height;
        let p2paddleLeft = this.paddle.p2position.x;
        let p2paddleRight = this.paddle.p2position.x + this.paddle.width;

        //collision detection player 1 paddle
        if (bottomBall >= p1paddleTop && this.position.x >= p1paddleLeft && this.position.x <= p1paddleRight) this.speed.y = -this.speed.y;

        //collision detection player 2 paddle
        if (topBall <= p2paddleBottom && this.position.x >= p2paddleLeft && this.position.x <= p2paddleRight) this.speed.y = -this.speed.y;



    }

}