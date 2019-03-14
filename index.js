// Importing Node Framework
// const express = require('express');
import express from 'express';

const PORT = 3000;
const app = express();

// Respond with Hello World for requests that hit '/'
app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(PORT, () => console.log(`Application Server listening on port ${PORT} in your browser.`));

module.exports = app;