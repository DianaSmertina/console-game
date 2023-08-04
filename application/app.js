"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("./components/menu/menu");
var App = /** @class */ (function () {
    function App() {
    }
    // constructor(private gameMoves: Array<string>) {
    //     this.gameMoves = gameMoves;
    // }
    App.prototype.chooseCompMove = function () {
        App.compMove = App.gameMoves[Math.floor(Math.random() * (App.gameMoves.length))]; //may be use random lib for more correct random
    };
    App.prototype.run = function () {
        App.gameMoves = process.argv.slice(2);
        this.chooseCompMove();
        var menu = new menu_1.default();
        menu.showMenu();
    };
    return App;
}());
exports.default = App;
