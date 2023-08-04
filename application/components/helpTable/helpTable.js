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
var menu_1 = require("../menu/menu");
var rules_1 = require("../rules/rules");
var Table = require("cli-table3");
var HelpTable = /** @class */ (function () {
    function HelpTable() {
    }
    HelpTable.prototype.drawTable = function () {
        var table = new Table({ head: __spreadArray([""], app_1.default.gameMoves, true) });
        var tableData = rules_1.default.winData.map(function (row, i) {
            var _a;
            return _a = {}, _a[app_1.default.gameMoves[i]] = row, _a;
        });
        table.push.apply(table, tableData);
        console.log(table.toString());
        new menu_1.default().showMenu();
    };
    return HelpTable;
}());
exports.default = HelpTable;
