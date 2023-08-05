import App from "../../app";
import User from "../players/user";
const readline = require("readline");

class Menu {
    static rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    showMenu() {
        console.log("Available moves:");
        App.gameMoves.forEach((moves, i) => console.log(i + 1 + " - " + moves));
        console.log("0 - exit\n? - help");
        Menu.rl.question("Enter your move: ", (answer: string) => new User().handleUserMove(answer));
    }
}

export default Menu;
