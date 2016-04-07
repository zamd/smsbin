"use latest";

const request = require('request');
const url     = require('url');

module.exports = (ctx, req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"message": "welcome to auth0 extensions!"}');
}
