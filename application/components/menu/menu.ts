const readline = require('readline');

class Menu {
    constructor(private gameMoves: Array<string>) {
        this.gameMoves = gameMoves;
    }

    showMenu() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("HMAC:\nAvailable moves:");
        this.gameMoves.forEach((moves, i) => console.log(i + 1 + " - " + moves));
        console.log("0 - exit\n? - help");
        rl.question("Enter your move: ", (answer: number) => {
            console.log(`Your move: ${this.gameMoves[answer - 1]}`); //TO DO: insert if choose 0 or ?
            console.log('Computer move:') //TO DO: computer move
            console.log('Somebody win!')
            console.log('HMAC key: ')
            rl.close();
        });
    }
}

export default Menu;
