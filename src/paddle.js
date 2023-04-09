export default class Paddle {
    constructor(gameWidth, gameHeight) {

        this.width = 100;
        this.height = 15;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}