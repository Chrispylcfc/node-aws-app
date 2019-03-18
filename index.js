// Importing Node Framework
// const express = require('express');
import express from 'express';

const PORT = 3000;
const app = express();

// Respond with Hello World for requests that hit '/'
app.get('/', (req, res) => {
    res.send('Hello Christopher J Powell! We\'ve done it!!!');
});

app.get('/football', (req, res) => {
    res.send('Leicester City!');
});

app.listen(PORT, () => console.log(`Application Server listening on port ${PORT} in your browser.`));

module.exports = app;
