import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

io.on("connection", (socket) => {
  socket.on("roomId", (room) => {
    socket.join(room);
  });

  socket.on("user-transfer", (data) => {
    socket.to(data.room).emit("gameStatus", data);
  });
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
