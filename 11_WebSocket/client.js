const ws = require("ws");

const sock = new ws("ws://127.0.0.1:6080");

sock.on("open", function() {
    console.log("connect success");
    sock.send("helloworld!!")
})

sock.on("error", function(err) {
    console.log("err", err)
})


sock.on("close", function() {
    console.log("close")
})

sock.on("message", function(data) {
    console.log("data", data)
})