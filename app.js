const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/photos', (request, response) => {
  response.sendFile(__dirname + '/views/photos.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('*', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.listen(3000);
