"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../../app");
var protection_1 = require("../protection/protection");
var readline = require('readline');
var Menu = /** @class */ (function () {
    function Menu(gameMoves) {
        this.gameMoves = gameMoves;
        this.gameMoves = gameMoves;
    }
    Menu.prototype.showMenu = function () {
        var _this = this;
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var protector = new protection_1.default(this.gameMoves);
        protector.generateHMAC();
        console.log("HMAC: ".concat(protection_1.default.gameHmac, "\nAvailable moves:"));
        this.gameMoves.forEach(function (moves, i) { return console.log(i + 1 + " - " + moves); });
        console.log("0 - exit\n? - help");
        rl.question("Enter your move: ", function (answer) {
            console.log("Your move: ".concat(_this.gameMoves[answer - 1])); //TO DO: insert if choose 0 or ?
            console.log("Computer move: ".concat(app_1.default.compMove)); //TO DO: computer move
            console.log('Somebody win!');
            console.log("HMAC key: ".concat(protection_1.default.key));
            rl.close();
        });
    };
    return Menu;
}());
exports.default = Menu;
