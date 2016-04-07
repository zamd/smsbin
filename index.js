"use latest";

const request = require('request');
const url     = require('url');

module.exports = (ctx, req, res) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end("{'message': 'welcome to auth0 extensions!'"}");
}