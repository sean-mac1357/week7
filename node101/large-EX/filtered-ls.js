'use strict';

const FS = require('fs');
const path = require('path');

if(process.argv.length < 4) {
    console.log('Please specify a path and a filter parameter');
    return;
}

FS.readdir(process.argv[2], (error, fileList) => {
    if(error) {
        console.error(error);
        return;
    }

    const filteredFiles = fileList.filter((file) => {
        return path.extname(file) === '.' + process.argv[3];
    });

    filteredFiles.forEach((file) => {
        console.log(file);
    });
});