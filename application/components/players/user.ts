import App from "../../app";
import HelpTable from "../helpTable/helpTable";
import Menu from "../menu/menu";
import Rules from "../rules/rules";

class User {
    static userMove: string;

    handleUserMove(move: string) {
        if (move === "?") {
            new HelpTable().drawTable();
        } else if (move === "0") {
            console.log("Goodbye!");
            Menu.rl.close();
        } else if (Number(move) > 0 && Number(move) <= App.gameMoves.length) {
            User.userMove = App.gameMoves[Number(move) - 1];
            new Rules().showResult();
        } else {
            console.log("Incorrect data");
            new Menu().showMenu();
        }
    }
}

export default User;
