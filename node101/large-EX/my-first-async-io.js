'use strict';
const FS = require('fs');

const BUF = FS.readFile(process.argv[2]).toString().split('/n').length-1

