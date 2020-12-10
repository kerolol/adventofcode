"use strict";
exports.__esModule = true;
var input_1 = require("./input");
var countTrees = function (input) {
    var pos = 0;
    var count = 0;
    input.split('\n').forEach(function (line, idx) {
        // Continue if first iteration
        if (idx === 0) {
            return;
        }
        // Walk the steps
        pos += 3;
        // Check if position is at the end of the line
        if (pos >= line.length) {
            pos -= line.length;
        }
        console.log('I am on line ' + idx + ' at position ' + pos + ' and here is a ' + line[pos]);
        // Check if tree is located at current position
        // If yes, increase counter
        if (line[pos] === '#') {
            count++;
        }
    });
    return count;
};
console.log(countTrees(input_1["default"]));
