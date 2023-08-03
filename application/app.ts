import Menu from "./components/menu/menu";

class App {
    constructor(private gameMoves: Array<string>) {
        this.gameMoves = gameMoves;
    }

    run() {
        const menu = new Menu(this.gameMoves);
        menu.showMenu();
    }
}

export default App;
