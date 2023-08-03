import Menu from "./components/menu/menu";

class App {
    static compMove: string;

    constructor(private gameMoves: Array<string>) {
        this.gameMoves = gameMoves;
    }

    chooseCompMove() { //TO DO: may be move in another class
        App.compMove = this.gameMoves[Math.floor(Math.random() * (this.gameMoves.length))]; //may be use random lib for more correct random
    }

    run() {
        this.chooseCompMove();
        const menu = new Menu(this.gameMoves);
        menu.showMenu();
    }
}

export default App;
