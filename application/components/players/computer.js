"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../../app");
var Random = require('random-js').Random;
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.chooseCompMove = function () {
        var random = new Random();
        Computer.compMove = app_1.default.gameMoves[random.integer(0, app_1.default.gameMoves.length - 1)];
    };
    return Computer;
}());
exports.default = Computer;
