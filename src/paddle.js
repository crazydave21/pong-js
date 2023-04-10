export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.width = 100;
        this.height = 15;

        this.p1maxspeed = 0.15;

        this.p1speed = 0;

        this.p2maxspeed = 0.15;

        this.p2speed = 0;

        this.p1position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }

        this.p2position = {
            x: gameWidth / 2 - this.width / 2,
            y: 10,
        }
    }

    p1Stop() {
        this.p1speed = 0;
    }

    p2Stop() {
        this.p2speed = 0;
    }

    p1MoveLeft() {
        this.p1speed = -this.p1maxspeed;

    }

    p2MoveLeft() {
        this.p2speed = -this.p2maxspeed;
    }

    p1MoveRight() {
        this.p1speed = this.p1maxspeed;
    }

    p2MoveRight() {
        this.p2speed = this.p2maxspeed;
    }

    draw(ctx) {

        ctx.fillStyle = 'black';
        //draw player 1 paddle on canvas
        ctx.fillRect(this.p1position.x, this.p1position.y, this.width, this.height);
        //draw player 2 paddle on canvas
        ctx.fillRect(this.p2position.x, this.p2position.y, this.width, this.height);

    }

    update(deltaTime) {
        //move player 1 paddle across x-axis
        this.p1position.x += this.p1speed * deltaTime;
        //move player 2 paddle across y-axis
        this.p2position.x += this.p2speed * deltaTime;

        //collison detection x-axis for player 1
        if (this.p1position.x <= 0) this.p1position.x = 0;
        if (this.p1position.x + this.width >= this.gameWidth) this.p1position.x = this.gameWidth - this.width;

        //collison detection x-axis for player 2
        if (this.p2position.x <= 0) this.p2position.x = 0;
        if (this.p2position.x + this.width >= this.gameWidth) this.p2position.x = this.gameWidth - this.width;
    }
}