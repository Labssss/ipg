const express = require('express')
const fs = require('fs');
const client = require('https');
const path = require('path');
// const authRouter = require('./routes/auth.router')
// const usefulRouter = require('./routes/useful.routes')
// const todoListRouter = require('./routes/todolist.router')
// const projectsRouter = require('./routes/projects.router')

const app = express()
const port = 3001


app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `*`);
    next();
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

