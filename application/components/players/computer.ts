import App from "../../app";
const { Random } = require('random-js');

class Computer {
    static compMove: string;
    
    chooseCompMove() {
        const random = new Random();
        Computer.compMove = App.gameMoves[random.integer(0, App.gameMoves.length - 1)];
    }
}

export default Computer;