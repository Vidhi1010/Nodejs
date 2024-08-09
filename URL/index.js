//URL - Uniform Resource Locator
//https://www.vidhisingh.dev/

//https- Protocal: Hyper transfer protocal secure

//www.vidhisingh.dev (Domain) - User Friendly Name of IP Address og my Server 

// /- root

// /about - path


const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Recieved \n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch ((myUrl.pathname)) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname
        res.end(`Hi, ${username}`);
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
