"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB_URI = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)(); // lee las var de entorno

var PORT = process.env.PORT || 3000;
exports.PORT = PORT;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/socketsdb";
exports.MONGODB_URI = MONGODB_URI;