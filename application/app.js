"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("./components/menu/menu");
var App = /** @class */ (function () {
    function App(gameMoves) {
        this.gameMoves = gameMoves;
        this.gameMoves = gameMoves;
    }
    App.prototype.chooseCompMove = function () {
        App.compMove = this.gameMoves[Math.floor(Math.random() * (this.gameMoves.length))]; //may be use random lib for more correct random
    };
    App.prototype.run = function () {
        this.chooseCompMove();
        var menu = new menu_1.default(this.gameMoves);
        menu.showMenu();
    };
    return App;
}());
exports.default = App;
