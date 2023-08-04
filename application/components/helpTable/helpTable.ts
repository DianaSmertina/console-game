import App from "../../app";

const Table = require("cli-table3");

class HelpTable {
    createData(moves: Array<string>) {
        const len = moves.length;
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

        return result;
    }

    drawTable() {
        const table = new Table({ head: ["", ...App.gameMoves] });

        const tableData = this.createData(App.gameMoves).map((row, i) => {
            return { [App.gameMoves[i]] : row}
        })

        table.push(...tableData);

        console.log(table.toString());
    }
}

export default HelpTable;
