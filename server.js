var redis = require('redis'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    _ = require('lodash');

app.use(express.static(__dirname + '/public'));

server.listen(4000);

var subscriber = redis.createClient();

subscriber.on('error', function(err) {
  console.log('Error:', err);
});

subscriber.on('subscribe', function(channel, count) {
  console.log('Subscribed on channel:', channel, ', count:', count);
});

subscriber.on('message', function(channel, message) {
  console.log('Message on channel:', channel, ', message:', message);
  io.sockets.emit('msg', { msg: message });
});

subscriber.subscribe('chat');

io.sockets.on('connection', function(socket) {
  var publisher = redis.createClient();

  socket.emit('news', { news: 'Welcome to chat sample with redis and socket.io.' });

  socket.on('msg', function(data) {
    publisher.publish('chat', data.msg);
  });

  socket.on('disconnect', function() {
    publisher.quit();
  });
});
