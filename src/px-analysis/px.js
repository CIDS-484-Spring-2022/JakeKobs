#!/usr/bin/env node

var fs = require("fs");

let pxDecodeStrings = function(path) {
    let cgtRegex = /(?=\Cgt)(.*?)(?=\")/g;

    function atob(str) {
        return Buffer.from(str, "base64").toString("binary");
    }

    function decodePxString(encoded) {
        for (
            var i = atob(encoded), a = "zNhxRXI", c = "", u = 0; u < i.length;
            ++u
        ) {
            var f = a.charCodeAt(u % 7);
            c += String.fromCharCode(f ^ i.charCodeAt(u));
        }
        return c;
    }

    let encodedScript = fs.readFileSync(path, "utf8");
    let decodedScript = encodedScript.replace(cgtRegex, (cgtString) => {
        return decodePxString(cgtString);
    });

    return decodedScript;
};

module.exports = { pxDecodeStrings };