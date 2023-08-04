"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("./components/menu/menu");
var protection_1 = require("./components/protection/protection");
var rules_1 = require("./components/rules/rules");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.chooseCompMove = function () {
        App.compMove = App.gameMoves[Math.floor(Math.random() * (App.gameMoves.length))]; //may be use random lib for more correct random
    };
    App.prototype.run = function () {
        App.gameMoves = process.argv.slice(2);
        this.chooseCompMove();
        var protector = new protection_1.default();
        protector.generateHMAC();
        console.log("HMAC: ".concat(protection_1.default.gameHmac));
        new rules_1.default().createWinData();
        var menu = new menu_1.default();
        menu.showMenu();
    };
    return App;
}());
exports.default = App;
