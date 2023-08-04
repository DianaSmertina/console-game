"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../../app");
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
                else if (j - i > 0 && j - i < len / 2) {
                    row.push("Win");
                }
                else if (j - i > len / 2) {
                    row.push("Lose");
                }
                else if (i - j > 0 && i - j < len / 2) {
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
        var userIndex = app_1.default.gameMoves.indexOf(app_1.default.userMove);
        var compIndex = app_1.default.gameMoves.indexOf(app_1.default.compMove);
        if (Rules.winData[compIndex][userIndex] === "Win") {
            return "Computer wins!";
        }
        else if (Rules.winData[compIndex][userIndex] === "Lose") {
            return "You win!";
        }
        else {
            return "Friendship wins!";
        }
    };
    return Rules;
}());
exports.default = Rules;
