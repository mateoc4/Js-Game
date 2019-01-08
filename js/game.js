import Furry from './furry';
import Coin from './coin';

class Game
    { constructor(){
        this.board = document.querySelectorAll('#board div');
        this.furry = new Furry();
        this.coin  = new Coin();
        this.score = 0;
        this.scoreStrong = document.querySelector("#score>div>strong");
        var self = this;

        this.index= (x,y)=>  x + (y * 10);

        this.showFurry =  () =>{
            this.hideVisibleFurry();
            this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');}

        this.hideVisibleFurry = ()=> {
            for (var i=0;i<this.board.length;i++){
                this.board[i].classList.remove('furry')}};

        this.showCoin = ()=> this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');

        this.moveFurry = ()=> {
            if(this.furry.direction === "right") {
                this.furry.x ++;
            } else if ( this.furry.direction === "left"){
                this.furry.x --;
            }else if(this.furry.direction ==="up"){
                this.furry.y --;
            }else if(this.furry.direction ==="down"){
                this.furry.y++;
            }
            this.hideVisibleFurry();
            this.showFurry();
            this.checkCoinCollision();
            this.gameOver();};

        this.turnFurry =  (event)=> {
            switch (event.which) {
                case 37:
                    this.furry.direction = 'left';
                    break;
                case 38:
                    this.furry.direction ='up';
                    break;
                case 39:
                    this.furry.direction ='right';
                    break;
                case 40:
                    this.furry.direction ='down';
                    break;}};

        this.checkCoinCollision =  ()=> {
            if(this.furry.x ===this.coin.x && this.furry.y ===this.coin.y){
                document.querySelector('.coin').classList.remove('coin');
                this.score ++;
                this.scoreStrong.innerText =this.score;
                this.coin = new Coin();
                this.showCoin();}};

        this.gameOver =  () =>{
            if (this.furry.x > 9 || this.furry.x < 0 || this.furry.y < 0 || this.furry.y > 9) {
                clearInterval(this.idSetInterval);
                this.hideVisibleFurry();
                var over =document.querySelector('#over');
                over.classList.remove('invisible');
                over.innerHTML = `
                <h1>Good game</h1><h1>Twoj wynik to </h1><h1>${this.score}</h1>
                `
            }
        };

        this.startGame = ()=> {
            this.idSetInterval = setInterval(function () {
                self.moveFurry();
            }, 250);
        };
}}

export default Game;
