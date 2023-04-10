export default class InputHandler {
    constructor(paddle) {
        
        //move paddle left or right
        addEventListener('keydown', event => {
            
            switch(event.keyCode) {
                case 37:
                    paddle.p1MoveLeft();
                    break;
                case 39:
                    paddle.p1MoveRight();
                    break;
                case 65:
                    paddle.p2MoveLeft();
                    break;
                case 68:
                    paddle.p2MoveRight();
                    break;
                    
            }
        });

        //stop paddle from moving when key is not pressed
        addEventListener('keyup', event => {
            
            switch(event.keyCode) {
                case 37:
                    if (paddle.p1speed < 0) 
                        paddle.p1Stop();
                    break;
                case 39:
                    if (paddle.p1speed > 0)
                        paddle.p1Stop();
                    break;
                case 65:
                    if (paddle.p2speed < 0)
                        paddle.p2Stop();
                    break;
                case 68:
                    if (paddle.p2speed > 0)
                        paddle.p2Stop();
                    break;
            }
        });
    }
}