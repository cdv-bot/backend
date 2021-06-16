const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http,{ origins: '*:*'})
const PORT = process.env.PORT || 3000;

io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message:"áds" })
  })
})

http.listen(PORT, function() {
  console.log('listening on port 4000')
})
