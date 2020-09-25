#!/usr/bin/env node

var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs[0]);

const jdenticon = require("jdenticon");
const fs = require("fs");

const value = myArgs[0];
const size = 200;

const png = jdenticon.toPng(value, size);
fs.writeFileSync(myArgs[1], png);
