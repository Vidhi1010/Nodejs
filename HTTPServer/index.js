const http = require("http");

const myServer = http.createServer((req, res) => {
//here arrow function is responsible for processing incoming request
console.log("New Req REc.");
res.end("Hello from Server");

});

myServer.listen(3000, () => {
    console.log("Server started!");
});
