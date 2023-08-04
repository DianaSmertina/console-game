import App from "../../app";
import HelpTable from "../helpTable/helpTable";
import Protection from "../protection/protection";
import Rules from "../rules/rules";

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
        Menu.rl.question("Enter your move: ", (answer: string) => {
            if (answer === "?") {
                const helpTable = new HelpTable();
                helpTable.drawTable();
            } else if (answer === "0") {
                console.log("Goodbye!");
                Menu.rl.close();
            } else if (Number(answer) > 0 && Number(answer) <= App.gameMoves.length) {
                App.userMove = App.gameMoves[Number(answer) - 1];
                this.showResult();
            } else {
                console.log('Incorrect data');
                this.showMenu();
            }
        });
    }

    showResult() {
        console.log(`Your move: ${App.userMove}`);
        console.log(`Computer move: ${App.compMove}`);
        console.log(new Rules().determineWinner());
        console.log(`HMAC key: ${Protection.key}`);
        Menu.rl.close();
    }
}

export default Menu;
