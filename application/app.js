"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("./components/menu/menu");
var computer_1 = require("./components/players/computer");
var protection_1 = require("./components/protection/protection");
var rules_1 = require("./components/rules/rules");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.run = function () {
        App.gameMoves = process.argv.slice(2);
        new computer_1.default().chooseCompMove();
        new protection_1.default().generateHMAC();
        new rules_1.default().createWinData();
        new menu_1.default().showMenu();
    };
    return App;
}());
exports.default = App;
