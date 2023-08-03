"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./application/app");
var args = process.argv.slice(2);
var app = new app_1.default(args);
app.run();
