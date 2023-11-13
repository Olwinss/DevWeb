const express = require('express');
const { resolve } = require('path');
const { PrismaClient } = require('@prisma/client')

const app = express();
var birds = require('./birds');
const prisma = new PrismaClient()

const port = 3010;

app.use(express.static('static'));
app.use('/birds', birds);
app.use([logmiddlewar]);

async function addContact(namee,emaill,phonee)
{
  await prisma.contact.create({
    data: {
      name: namee,
      email: emaill,
      phone: phonee
    },
  })
}

async function addContact(namee,emaill,phonee)
{
  await prisma.contact.create({
    data: {
      name: namee,
      email: emaill,
      phone: phonee
    },
  })
}

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
  if (req.params.id <= 10) { 
    next();
  } else {
    res.sendFile(resolve(__dirname, 'pages/ShowContact.html'));
  }
}

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// app.get('/test', (req, res, next) => {
//   next();
// }),
//   app.get('/test', (req, res) => {
//     res.sendFile(resolve(__dirname, 'pages/index.html'));
//   });

app.get('/test', (req, res) => {
     res.sendFile(resolve(__dirname, 'pages/test.html'));
});


app.get('/test/:id', [testnumberinfeg10], (req, res) => {
  res.send('Id : ' + req.params.id);
});

app.get('/gerer', (req, res) => {
  res.sendFile(resolve(__dirname,ShowContact.html));
});

//https://3010-olwinss-devweb-fm0371rff45.ws-eu106.gitpod.io/gerer/Olivier/labrosseolivier2004@gmail.com/0768648999
app.get('/gerer/:name/:email/:phone', (req, res) => {
  addContact(req.params.name,req.params.email,req.params.phone);
  res.sendFile(resolve(__dirname, 'pages/test.html'));

});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
});

