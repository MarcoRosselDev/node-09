import express from 'express'
//const express = require('express')
import myDate from './moduleTest.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.writeHead(200, {"content-type":"text/html"});
  res.write("The date and time are currently: " + myDate());
  res.end();
  //res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






















/* // server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
 */