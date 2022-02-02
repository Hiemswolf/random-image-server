const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

const imgNames = fs.readdirSync(path.join(__dirname, '/images'));
app.get('/*', (req, res) => {
	const imgName = imgNames[Math.floor(Math.random() * imgNames.length)];
	res.sendFile(path.join(__dirname, `/images/${imgName}`));
});

module.exports = app;
