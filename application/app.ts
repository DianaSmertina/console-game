import Menu from "./components/menu/menu";

class App {
    static compMove: string;
    static gameMoves: Array<string>;

    // constructor(private gameMoves: Array<string>) {
    //     this.gameMoves = gameMoves;
    // }

    chooseCompMove() { //TO DO: may be move in another class
        App.compMove = App.gameMoves[Math.floor(Math.random() * (App.gameMoves.length))]; //may be use random lib for more correct random
    }

    run() {
        App.gameMoves = process.argv.slice(2);
        this.chooseCompMove();
        const menu = new Menu();
        menu.showMenu();
    }
}

export default App;
