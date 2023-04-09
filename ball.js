export default class Ball {
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.speed = 5;
        this.size = 10;

        this.position = {
            x: 0,
            y: 0,
        }

        this.direction = {
            x: 0,
            y: 0,
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size)
    }
}