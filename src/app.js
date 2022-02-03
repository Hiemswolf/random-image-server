const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

const imgNames = fs.readdirSync(path.join(__dirname, '/images'));
app.get('/*', (req, res) => {

	if (Math.floor(Math.random() * 50) == 0) {
		res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
		return;
	}

	const imgName = imgNames[Math.floor(Math.random() * imgNames.length)];
	res.sendFile(path.join(__dirname, `/images/${imgName}`));
});

module.exports = app;
