import socket from './service/socket.service';

const userId = Math.random();

socket.on('welcome', (id) => {
  console.log(`I'm socket: ${id}`);
  socket.emit('ready');
});
// socket.on('updateHand', (hand) => {
//   hand.forEach((element) => {
//     const newContent = document.createTextNode(` ${element.type} `);
//     document
//       .getElementsByClassName('player-dashboard')[0]
//       .appendChild(newContent);
//   });
// });
