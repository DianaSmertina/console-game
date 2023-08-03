"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("./components/menu/menu");
var App = /** @class */ (function () {
    function App(gameMoves) {
        this.gameMoves = gameMoves;
        this.gameMoves = gameMoves;
    }
    App.prototype.run = function () {
        var menu = new menu_1.default(this.gameMoves);
        menu.showMenu();
    };
    return App;
}());
exports.default = App;
