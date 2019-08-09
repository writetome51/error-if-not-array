"use strict";
Object.defineProperty(exports, "__esModule", {value: true});


function errorIfNotArray(arg) {
	if (!(Array.isArray(arg))) throw new Error('Input must be array.');
}
exports.errorIfNotArray = errorIfNotArray;
