import { WebSocketServer } from "ws";

const wsServer = new WebSocketServer({ port: 5000 });

const socketList = [];

wsServer.on("connection", (socket) => {
    // console.log("New frontend connected");
    setTimeout(() => socket.send("Welcome to websocket server"), 3000);
    socketList.forEach(item => item.send(`New member connect. Now we have ${socketList.length + 1} members.`));
    socketList.push(socket);
})