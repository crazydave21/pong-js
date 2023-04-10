export default class Score {
    constructor() {
        this.p1score = 0;
        this.p2score = 0;
        
    }

    p1Score() {
        this.p1score += 1;
        document.getElementById('player1').innerHTML = 'SCORE : ' + this.p1score;
    }

    p2Score() {
        this.p2score += 1;
        document.getElementById('player2').innerHTML = 'SCORE : ' + this.p2score;
    }
}