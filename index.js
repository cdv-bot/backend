const express = require('express');
const http = require('http').createServer(app);
const cors = require('cors');
const socketio = require('socket.io');
const http = require("http");
const PORT = process.env.PORT || 4000;


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

app
io.on('connection', socket => {
  socket.on('message', async ({ name, message }) => {
    io.emit('message', { name, message });
  });
});

http.listen(PORT, function () {
  console.log('listening on port 4000');
});
