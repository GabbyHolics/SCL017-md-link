#!/usr/bin/env node
const { mdLinks } = require('./md-links.js');
const path = require("path");
const routeDirection = path.resolve(process.argv[2]);
const option = process.argv[3];

mdLinks(routeDirection, {
    validate: option === '--validate' ? true : false
}).then(res => console.log(res))



