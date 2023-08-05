"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_1 = require("../players/computer");
var secureRandom = require("secure-random");
var crypto = require("crypto");
var Protection = /** @class */ (function () {
    function Protection() {
    }
    Protection.prototype.generateKey = function () {
        Protection.key = secureRandom.randomBuffer(32).toString("hex");
    };
    Protection.prototype.generateHMAC = function () {
        this.generateKey();
        Protection.gameHmac = crypto
            .createHmac("sha256", Protection.key)
            .update(computer_1.default.compMove)
            .digest("hex");
        console.log("HMAC: ".concat(Protection.gameHmac));
    };
    return Protection;
}());
exports.default = Protection;
