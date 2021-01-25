const FS = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('filename: ', function (filename) {
    readline.close();
    FS.readFile(filename, function(error, buffer) {
        if (error) {
            console.log(error.message);
            return;
        }
        const content = buffer.toString();
        const upperCased = content.toUpperCase();
        console.log(upperCased);
    });
});