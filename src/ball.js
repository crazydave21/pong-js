export default class Ball {
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

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

        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);

    }

    update(deltaTime) {

        //move ball around canvas
        this.position.x += this.speed.x * deltaTime;
        this.position.y += this.speed.y * deltaTime;

        //collision on x-axis
        if (this.position.x + this.size >= this.gameWidth || this.position.x <= 0) this.speed.x = -this.speed.x;

        //collision on y-axis
        if (this.position.y + this.size >= this.gameHeight || this.position.y <= 0) this.speed.y = -this.speed.y;

    }
       
}