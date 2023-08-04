"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../../app");
var secureRandom = require("secure-random");
var crypto = require("crypto");
var Protection = /** @class */ (function () {
    function Protection() {
    }
    // constructor(private gameMoves: Array<string>) {
    //     this.gameMoves = gameMoves;
    // }
    Protection.prototype.generateKey = function () {
        Protection.key = secureRandom.randomBuffer(32).toString("hex");
    };
    Protection.prototype.generateHMAC = function () {
        this.generateKey();
        Protection.gameHmac = crypto
            .createHmac("sha256", Protection.key)
            .update(app_1.default.compMove)
            .digest("hex");
    };
    return Protection;
}());
exports.default = Protection;
