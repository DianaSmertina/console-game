import App from "../../app";

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
                } else if (j - i > 0 && j - i < len / 2) {
                    row.push("Win");
                } else if (j - i > len / 2) {
                    row.push("Lose");
                } else if (i - j > 0 && i - j < len / 2) {
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
        const userIndex = App.gameMoves.indexOf(App.userMove);
        const compIndex = App.gameMoves.indexOf(App.compMove);
        if (Rules.winData[compIndex][userIndex] === "Win") {
            return "Computer wins!";
        } else if (Rules.winData[compIndex][userIndex] === "Lose") {
            return "You win!";
        } else {
            return "Friendship wins!";
        }
    }
}

export default Rules;
