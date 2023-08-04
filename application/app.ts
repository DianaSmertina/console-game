import Menu from "./components/menu/menu";
import Protection from "./components/protection/protection";
import Rules from "./components/rules/rules";

class App {
    static compMove: string;
    static userMove: string;
    static gameMoves: Array<string>;

    chooseCompMove() { //TO DO: may be move in another class
        App.compMove = App.gameMoves[Math.floor(Math.random() * (App.gameMoves.length))]; //may be use random lib for more correct random
    }

    run() {
        App.gameMoves = process.argv.slice(2);
        this.chooseCompMove();
        const protector = new Protection();
        protector.generateHMAC();
        console.log(`HMAC: ${Protection.gameHmac}`);
        new Rules().createWinData();
        const menu = new Menu();
        menu.showMenu();
    }
}

export default App;
