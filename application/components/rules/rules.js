"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../../app");
var menu_1 = require("../menu/menu");
var computer_1 = require("../players/computer");
var user_1 = require("../players/user");
var protection_1 = require("../protection/protection");
var Rules = /** @class */ (function () {
    function Rules() {
    }
    Rules.prototype.createWinData = function () {
        var len = app_1.default.gameMoves.length;
        var result = [];
        for (var i = 0; i < len; i++) {
            var row = [];
            for (var j = 0; j < len; j++) {
                if (i === j) {
                    row.push("Drawn");
                }
                else if (j - i > len / 2 || (i - j > 0 && i - j < len / 2)) {
                    row.push("Lose");
                }
                else {
                    row.push("Win");
                }
            }
            result.push(row);
        }
        Rules.winData = result;
    };
    Rules.prototype.determineWinner = function () {
        var result = Rules.winData[app_1.default.gameMoves.indexOf(computer_1.default.compMove)][app_1.default.gameMoves.indexOf(user_1.default.userMove)];
        if (result === "Win") {
            return "Computer wins!";
        }
        else if (result === "Lose") {
            return "You win!";
        }
        else {
            return "Friendship wins!";
        }
    };
    Rules.prototype.showResult = function () {
        var winner = this.determineWinner();
        console.log("Your move: ".concat(user_1.default.userMove, "\nComputer move: ").concat(computer_1.default.compMove, "\n").concat(winner, "\nHMAC key: ").concat(protection_1.default.key));
        menu_1.default.rl.close();
    };
    return Rules;
}());
exports.default = Rules;
