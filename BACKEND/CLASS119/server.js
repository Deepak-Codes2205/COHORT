import app from "./src/app.js";
import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer(app);
const io = new Server(httpServer, {
    /* options */
});

io.on("connection", (socket) => {
  console.log("New connection is created")

  socket.on("message", (msg) =>{
    console.log('User fired messsage event')
    console.log(msg)
    io.emit("abc",msg)
  })
});

httpServer.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})


