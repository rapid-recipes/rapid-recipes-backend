const express = require('express');
const cors = require('cors');
const server = express();


const recipeScraper = require('recipe-scraper');

server.use(cors())
server.use(express.json())


server.get('/api/parse', (req, res) => {
    res.status(201).json({ msg: 'helloworld' })
});

server.post('/api/parse', async (req, res) => {
    const url = req.body.url;
    recipe = await recipeScraper(url);

    res.status(200).json(recipe);
});

module.exports = server;