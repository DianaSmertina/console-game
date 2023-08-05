"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../../app");
var user_1 = require("../players/user");
var readline = require("readline");
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.showMenu = function () {
        console.log("Available moves:");
        app_1.default.gameMoves.forEach(function (moves, i) { return console.log(i + 1 + " - " + moves); });
        console.log("0 - exit\n? - help");
        Menu.rl.question("Enter your move: ", function (answer) { return new user_1.default().handleUserMove(answer); });
    };
    Menu.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return Menu;
}());
exports.default = Menu;
