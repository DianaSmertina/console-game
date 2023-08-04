"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../../app");
var Table = require("cli-table3");
var HelpTable = /** @class */ (function () {
    function HelpTable() {
    }
    HelpTable.prototype.createData = function (moves) {
        var len = moves.length;
        var result = [];
        for (var i = 0; i < len; i++) {
            var row = [];
            for (var j = 0; j < len; j++) {
                if (i === j) {
                    row.push("Drawn");
                }
                else if (j - i > 0 && j - i < len / 2) {
                    row.push("Win");
                }
                else if (j - i > len / 2) {
                    row.push("Lose");
                }
                else if (i - j > 0 && i - j < len / 2) {
                    row.push("Lose");
                }
                else {
                    row.push("Win");
                }
            }
            result.push(row);
        }
        return result;
    };
    HelpTable.prototype.drawTable = function () {
        var table = new Table({ head: __spreadArray([""], app_1.default.gameMoves, true) });
        var tableData = this.createData(app_1.default.gameMoves).map(function (row, i) {
            var _a;
            return _a = {}, _a[app_1.default.gameMoves[i]] = row, _a;
        });
        table.push.apply(table, tableData);
        console.log(table.toString());
    };
    return HelpTable;
}());
exports.default = HelpTable;
