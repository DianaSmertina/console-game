"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("./components/menu/menu");
var computer_1 = require("./components/players/computer");
var protection_1 = require("./components/protection/protection");
var rules_1 = require("./components/rules/rules");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.checkGameMoves = function () {
        var args = new Set(process.argv.slice(2));
        if (args.size >= 3 && args.size % 2 === 1) {
            App.gameMoves = Array.from(args);
            return true;
        }
        console.log('Please enter an odd number of arguments >= 3');
        process.exit();
    };
    App.prototype.startGame = function () {
        new computer_1.default().chooseCompMove();
        new protection_1.default().generateHMAC();
        new rules_1.default().createWinData();
        new menu_1.default().showMenu();
    };
    App.prototype.run = function () {
        if (this.checkGameMoves()) {
            this.startGame();
        }
    };
    return App;
}());
exports.default = App;
