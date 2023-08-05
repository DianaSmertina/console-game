import Menu from "./components/menu/menu";
import Computer from "./components/players/computer";
import Protection from "./components/protection/protection";
import Rules from "./components/rules/rules";

class App {
    static gameMoves: Array<string>;

    checkGameMoves() {
        const args = new Set(process.argv.slice(2));
        if (args.size >= 3 && args.size % 2 === 1) {
            App.gameMoves = Array.from(args);
            return true;
        }
        console.log('Please enter an odd number of arguments >= 3');
        process.exit();
    }

    startGame() {
        new Computer().chooseCompMove();
        new Protection().generateHMAC();
        new Rules().createWinData();
        new Menu().showMenu();
    }

    run() {
        if (this.checkGameMoves()) {
           this.startGame();
        }
    }
}

export default App;
