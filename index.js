"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var isArray_notArray_1 = require("@writetome51/is-array-not-array");


function errorIfNotArray(arg) {
	if (isArray_notArray_1.notArray(arg)) throw new Error('Input must be array.');
}
exports.errorIfNotArray = errorIfNotArray;
