import express from "express";
import http from "http";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

// import app from "./app.js";
const PORT = process.env.PORT || 3001;
// app.listen(PORT);
// console.log(`Server on port http://localhost:${PORT}`);

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, "../client/build")));

io.on("connection", (socket) => {
  console.log("socket conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("socket desconectado", socket.id);
    io.emit("socket_desconectado", {
      texto: "Socket desconectado.",
      id: socket.id,
    });
  });

  socket.on("chat:mensaje", (data) => {
    console.log(data);
    io.emit("chat:mensaje", data);
  });

  socket.on("chat:escribiendo", (usuario) => {
    console.log(usuario);
    socket.broadcast.emit("chat:escribiendo", usuario);
  });
});

server.listen(PORT);
console.log(`server on port ${PORT}`);
