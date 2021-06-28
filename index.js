const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();
app.get('/',(req,res)=> res.send("hello world"));
const server = http.Server(app);
server.listen(PORT);
const io = socket(server,{
  cors:{
    origin:"*",
    methods:["GET","POST"]
  }
});

app.use(cors());

io.on('connection', socket => {
  socket.on('message', async ({ name, message }) => {
    io.emit('message', { name, message });
  });
});


