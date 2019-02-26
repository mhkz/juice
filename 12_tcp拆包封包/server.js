const net = require('net');
const netpkg = require("./netpkg")
var lastPkg = null



const server = net.createServer()

server.on("connection", (socket) => {
   console.log("Client is connect");
   
   socket.on("close", () => {
       console.log("close socket")
   })

   socket.on("data", data => {
       if(lastPkg != null) { // 上一次没有处理完的半包
            var buf = Buffer.concat([lastPkg, data], lastPkg.lngth + data.length);
       } else {
           lastPkg = data;
       }

       var offset = 0;
       var pkgLen = netpkg.readPkgSize(lastPkg, offset);

       if(pkgLen < 0) {
           return;
       }

       while(offset + pkgLen <= lastPkg.length) {// 判断是否有完整的包
           // 根据长度信息来读取数据， 假设传来的是文本数据
           var cmdBuf = Buffer.allocUnsafe(pkgLen - 2);// 减去自身的长度信息
           lastPkg.copy(cmdBuf, 0, offset + 2, offset + pkgLen);
           console.log("recv Cmd", cmdBuf) 
           console.log("recv Cmd", cmdBuf.toString('utf8'));

           offset += pkgLen;
           if(offset >= lastPkg.length) {// 包正好处理完
               break;
           }
          
           pkgLen = netpkg.readPkgSize(lastPkg, offset);
           if(pkgLen < 0) {
               break;
           }

           // 能处理的数据包已经处理完， 保存 0.x的包

           if(offset >=lastPkg.length) {
                lastPkg = null;
           } else {// offset, length 则很短数据拷贝到新的Buffer中
               var buf = Buffer.allocUnsafe(lastPkg.length - offset);
                lastPkg.copy(buf, 0, offset, lastPkg.length);
                lastPkg = buf
            }
       }
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
