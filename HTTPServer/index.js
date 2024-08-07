const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  //here arrow function is responsible for processing incoming request
  //console.log(req);
  //request is a object that contain all the requests like what request user want to access and many more
  const log = `${Date.now()}: ${req.url} New Req Recieved \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch ((req.url)) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I am Vidhi Singh");
        break;
      case "/contact":
        res.end("vidhi123@gmail.com");
        break;
      default: 
        res.end("404 Not Found");
    }
    //res.end("Hello From Server Again");
  });
});

myServer.listen(3000, () => {
  console.log("Server started!");
});
