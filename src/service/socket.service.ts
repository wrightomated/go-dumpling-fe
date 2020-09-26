import io from 'socket.io-client';

const socket = io(`${process.env.SOCKET_URL}?token=abc`);

export { socket as default };
