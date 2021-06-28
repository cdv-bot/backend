const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(http, { origins: '*:*' });
const PORT = process.env.PORT || 4000;
const request = require('request');
var rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
app.use(cors());
io.on('connection', socket => {
  socket.on('message', async ({ name, message }) => {
    io.emit('message', { name, message });
  });
});

http.listen(PORT, function () {
  console.log('listening on port 4000');
});
