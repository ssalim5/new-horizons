const Message = require('../db/models/Message');
const Chat = require('../db/models/Chat');

module.exports = function(io){

  io.on('connection', socket => {

    console.log(socket.id, ' has made a persistent connection to the server!');

    socket.on('new-message', message => {
      socket.broadcast.emit('new-message', message);
    });

    socket.on('new-chat', chat => {
      socket.broadcast.emit('new-chat', chat);
    });

  });

};
