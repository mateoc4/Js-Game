import Game from './game';


const gra = new Game();

gra.showFurry();
gra.showCoin();
gra.startGame();

document.addEventListener('keydown', event=> gra.turnFurry(event));

