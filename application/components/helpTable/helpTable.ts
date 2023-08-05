import App from "../../app";
import Menu from "../menu/menu";
import Rules from "../rules/rules";
const Table = require("cli-table3");

class HelpTable {
    drawTable() {
        const table = new Table({ head: ["", ...App.gameMoves] });
        const tableData = Rules.winData.map((row, i) => {
            return { [App.gameMoves[i]] : row}
        })
        table.push(...tableData);
        console.log(table.toString());
        new Menu().showMenu();
    }
}

export default HelpTable;
