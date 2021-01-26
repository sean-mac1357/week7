'use strict';
const FS = require('fs');

const BUF = FS.readFileSync(process.argv[2]);

const outputSTR = BUF.toString();

const newLInes = outputSTR.split('\n').length - 1

console.log(newLInes)
