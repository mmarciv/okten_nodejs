const fs = require('fs')
const path = require("path");

function createDir(dirname) {
    fs.mkdir(dirname, err => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
}

function createFile(filepath, data) {
    fs.appendFile(filepath, data, err => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
}

function renameDirs(fromDir, toDir) {
    fs.rename(fromDir, toDir, err => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
}

function createMainDir() {
    createDir(path.join(__dirname, 'main'));
}

function createMainInPersonDir() {
    createDir(path.join(__dirname, 'main', 'inPerson'));
}

function createMainOnlineDir() {
    createDir(path.join(__dirname, 'main', 'online'));
}

function createOnlineFiles(arr) {
    for (const a of arr) {
        let data = JSON.stringify(a).replaceAll('{', '').replaceAll('}', '');
        data = data.replaceAll(',', '\n');
        createFile(path.join(__dirname, 'main', 'online', `${a.name}.txt`), data);
    }
}

function createInPersonFiles(arr) {
    for (const a of arr) {
        let data = JSON.stringify(a).replaceAll('{', '').replaceAll('}', '');
        data = data.replaceAll(',', '\n');
        createFile(path.join(__dirname, 'main', 'inPerson', `${a.name}.txt`), data);
    }
}

function moveDirsContent() {
    renameDirs(path.join(__dirname, 'main', 'inPerson'), path.join(__dirname, 'main', 'tmp'));
    renameDirs(path.join(__dirname, 'main', 'online'), path.join(__dirname, 'main', 'inPerson'));
    renameDirs(path.join(__dirname, 'main', 'tmp'), path.join(__dirname, 'main', 'online'));
}

function clearDirs() {
    removeDir(path.join(__dirname, 'main'));
}

module.exports = {
    createMainDir, createMainInPersonDir,
    createMainOnlineDir, createOnlineFiles, createInPersonFiles, moveDirsContent
};
