import Menu from "./components/menu/menu";
import Computer from "./components/players/computer";
import Protection from "./components/protection/protection";
import Rules from "./components/rules/rules";

class App {
    static gameMoves: Array<string>;

    run() {
        App.gameMoves = process.argv.slice(2);
        new Computer().chooseCompMove();
        new Protection().generateHMAC();
        new Rules().createWinData();
        new Menu().showMenu();
    }
}

export default App;
