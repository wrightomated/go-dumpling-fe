// // function addElement(message) {
// //   // create a new div element
// //   const newDiv = document.createElement("div");

// //   // and give it some content
// //   const newContent = document.createTextNode(message);

// //   // add the text node to the newly created div
// //   newDiv.appendChild(newContent);

// //   // add the newly created element and its content into the DOM
// //   const currentDiv = document.getElementById("div1");
// //   document.body.insertBefore(newDiv, currentDiv);
// // }

// // var socket = io("http://164.90.146.242");
// import socket from './src/service/socket.service';

// socket.on('welcome', () => {
//   socket.emit('ready');
// });
// socket.on('updateHand', (hand) => {
//   hand.forEach((element) => {
//     const newContent = document.createTextNode(` ${element.type} `);
//     document
//       .getElementsByClassName('player-dashboard')[0]
//       .appendChild(newContent);
//   });
// });
// // socket.on('countDown', (message) => {
// //   addElement(message);
// // });
// // socket.on('reply', (message) => {
// //   console.log(message);
// // });
