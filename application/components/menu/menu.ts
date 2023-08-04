import App from "../../app";
import HelpTable from "../helpTable/helpTable";
import Protection from "../protection/protection";

const readline = require('readline');

class Menu {
    // constructor(private gameMoves: Array<string>) {
    //     this.gameMoves = gameMoves;
    // }

    showMenu() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const protector = new Protection();
        protector.generateHMAC();
        console.log(`HMAC: ${Protection.gameHmac}\nAvailable moves:`);
        App.gameMoves.forEach((moves, i) => console.log(i + 1 + " - " + moves));
        console.log("0 - exit\n? - help");
        rl.question("Enter your move: ", (answer: number | string) => {
            if (answer === '?') {
                const helpTable = new HelpTable();
                helpTable.drawTable();
            } else if (typeof answer === 'number') {
                console.log(`Your move: ${App.gameMoves[answer - 1]}`); //TO DO: insert if choose 0 or ?
                console.log(`Computer move: ${App.compMove}`) //TO DO: computer move
                console.log('Somebody win!')
                console.log(`HMAC key: ${Protection.key}`)
                rl.close();
            }
            
        });
    }
}

export default Menu;
