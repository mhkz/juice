var net = require('net');

var sock = net.connect({
    port: 6080,
     host: "127.0.0.1"
    }, () => {
    console.log("client")
})


// 连接成功调用的事件
sock.on("connect", () => {
    sock.write("hello world", "utf8")
})

sock.on("error",  e=> {
    console.log("error" + e);
})

sock.on("close", () => {
    console.log("close"  )
})

sock.on("end", () => {
    console.log("end");
})


// 有数据发生的时候会调用
sock.on("data", (data) => {
    console.log("data" + data)
})