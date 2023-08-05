import App from "../../app";
import Menu from "../menu/menu";
import Computer from "../players/computer";
import User from "../players/user";
import Protection from "../protection/protection";

class Rules {
    static winData: string[][];

    createWinData() {
        const len = App.gameMoves.length;
        const result = [];
        for (let i = 0; i < len; i++) {
            const row = [];
            for (let j = 0; j < len; j++) {
                if (i === j) {
                    row.push("Drawn");
                } else if (j - i > len / 2 || (i - j > 0 && i - j < len / 2)) {
                    row.push("Lose");
                } else {
                    row.push("Win");
                }
            }
            result.push(row);
        }
        Rules.winData = result;
    }

    determineWinner() {
        const result = Rules.winData[App.gameMoves.indexOf(Computer.compMove)][App.gameMoves.indexOf(User.userMove)];
        if (result === "Win") {
            return "Computer wins!";
        } else if (result === "Lose") {
            return "You win!";
        } else {
            return "Friendship wins!";
        }
    }

    showResult() {
        const winner = this.determineWinner();
        console.log(`Your move: ${User.userMove}\nComputer move: ${Computer.compMove}\n${winner}\nHMAC key: ${Protection.key}`);
        Menu.rl.close();
    }
}

export default Rules;
