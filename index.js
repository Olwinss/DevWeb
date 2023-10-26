const express = require('express');
const { resolve } = require('path');

const app = express();
var birds = require('./birds');

const port = 3010;

app.use(express.static('static'));
app.use('/birds', birds);
app.use([logmiddlewar]);

function logmiddlewar(req, res, next) {
  console.log(req.socket.localAddress);
  let date = new Date();
  console.log(
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
  );
  console.log(req.method);
  console.log(req.path);
  next();
}

function testnumberinfeg10(req, res, next) {
  if (req.params.id <= 10 && isNaN(req.params.id) == false) { 
    next();
  } else {
    res.sendFile(resolve(__dirname, 'pages/index.html'));
  }
}

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/test', (req, res, next) => {
  next();
}),
  app.get('/test', (req, res) => {
    res.sendFile(resolve(__dirname, 'pages/index.html'));
  });

app.get('/test/:id', [testnumberinfeg10], (req, res) => {
  res.send('Id : ' + req.params.id);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
