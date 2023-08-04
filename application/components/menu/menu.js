"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../../app");
var helpTable_1 = require("../helpTable/helpTable");
var protection_1 = require("../protection/protection");
var rules_1 = require("../rules/rules");
var readline = require("readline");
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.showMenu = function () {
        var _this = this;
        console.log("Available moves:");
        app_1.default.gameMoves.forEach(function (moves, i) { return console.log(i + 1 + " - " + moves); });
        console.log("0 - exit\n? - help");
        Menu.rl.question("Enter your move: ", function (answer) {
            if (answer === "?") {
                var helpTable = new helpTable_1.default();
                helpTable.drawTable();
            }
            else if (answer === "0") {
                console.log("Goodbye!");
                Menu.rl.close();
            }
            else if (Number(answer) > 0 && Number(answer) <= app_1.default.gameMoves.length) {
                app_1.default.userMove = app_1.default.gameMoves[Number(answer) - 1];
                _this.showResult();
            }
            else {
                console.log('Incorrect data');
                _this.showMenu();
            }
        });
    };
    Menu.prototype.showResult = function () {
        console.log("Your move: ".concat(app_1.default.userMove));
        console.log("Computer move: ".concat(app_1.default.compMove));
        console.log(new rules_1.default().determineWinner());
        console.log("HMAC key: ".concat(protection_1.default.key));
        Menu.rl.close();
    };
    Menu.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return Menu;
}());
exports.default = Menu;
