export default class Paddle {
    constructor(gameWidth, gameHeight) {

        this.width = 100;
        this.height = 15;

        this.p1position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }

        this.p2position = {
            x: gameWidth / 2 - this.width / 2,
            y: 10,
        }
    }

    draw(ctx) {
        
        ctx.fillStyle = 'black';
        //draw player 1 paddle on canvas
        ctx.fillRect(this.p1position.x, this.p1position.y, this.width, this.height);
        //draw player 2 paddle on canvas
        ctx.fillRect(this.p2position.x, this.p2position.y, this.width, this.height);

    }
}