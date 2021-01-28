'use strict';

const FS = require('fs');
const path = require('path');

module.exports = function(directory, fileExtension, cb) {
    FS.readdir(directory, (error, fileList) => {
        if(error) {
            return cb(error);
        }

        const filteredFiles = fileList.filter((file) => {
            return path.extname(file) === '.' + fileExtension;
        });

        cb(null, filteredFiles);
    });
};