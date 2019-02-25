const ws = require("ws");

const server = new ws.Server({
    host: "127.0.0.1",
    port: 6080
});

// 监听进入进来的客户端事件
function websocketAddListerner(clientSocket) {
    // close事件
    clientSocket.on("close", () => {
        console.log()
    });

    // error事件
    clientSocket.on("error", (err) => {
        console.log("err", err);
    });

    // end

    // message 事件， data已经是根据websocket协议解码解开来的原始shuju
    clientSocket.on("message", (data) => {
        console.log("接收到数据", data);
    })
}


// connect 事件，有客户端接入进来
function onSereverClientComming(clientSocket) {
    console.log("客户端连接进来")
    websocketAddListerner(clientSocket)
}
server.on("connection", onSereverClientComming);

// error 事件， 监听错误
function onServerError(clientSocket) {

}
server.on("error", onServerError);

// headers事件， 拿给会给客户端的字符
function onServerHeaders(data) {
    console.log("headers", data)
}
server.on("headers", onServerHeaders);