const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');
const Message = require('./src/models');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

const app = express();

const db = require('./src/connect');
const { Mongoose } = require('mongoose');
db.connect();

app.use(cors());
app.get('/', (req, res) => {
  Message.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
      return;
    }
    res.status(400).json({ error: 'error' });
  });
});
const server = http.Server(app);
server.listen(PORT);
const io = socket(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

