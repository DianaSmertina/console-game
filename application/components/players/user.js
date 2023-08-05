"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../../app");
var helpTable_1 = require("../helpTable/helpTable");
var menu_1 = require("../menu/menu");
var rules_1 = require("../rules/rules");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.handleUserMove = function (move) {
        if (move === "?") {
            new helpTable_1.default().drawTable();
        }
        else if (move === "0") {
            console.log("Goodbye!");
            menu_1.default.rl.close();
        }
        else if (Number(move) > 0 && Number(move) <= app_1.default.gameMoves.length) {
            User.userMove = app_1.default.gameMoves[Number(move) - 1];
            new rules_1.default().showResult();
        }
        else {
            console.log("Incorrect data");
            new menu_1.default().showMenu();
        }
    };
    return User;
}());
exports.default = User;
