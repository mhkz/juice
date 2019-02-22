const net = require('net');

const server = net.createServer()

server.on("connection", (socket) => {
   console.log("Client is connect");
   
   socket.setEncoding("utf8")

   // 客户端断开连接的时候处理
   socket.on("close", () => {
       console.log("close socket")
   })

   // 接受到客户端的数据
   socket.on("data", data => {
       console.log(data);
   })

   // 客户端错误
   socket.on("error", (error) => {
       console.log("error" + error)
   })
})

server.on("listening", () => {
    console.log("开始监听事件")
})

server.listen({
    port: 6080,
    host: "127.0.0.1",
    exclusive: true
})

server.on("close", () => {
    console.log("连接关闭")
})

// 监听发生错误的时候调用
server.on("error", error => {
    console.log("error" + error)
})

server.on