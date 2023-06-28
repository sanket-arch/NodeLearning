const http = require("http");
const fs = require("fs");
//Creating Server
//createServer method is used create server and takes two arguments reques and response
//request: gives the information about the URL from where the request has been made
//respose: what reponse to give back to that URL
const server = http.createServer((req, res) => {
  //sending back the req
  //1. set the header of the reposnse which tell the browser which type of data is being sent
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.write(data);
    res.end();
  });
});

//To start the server we have to start listening to the request,
//we can do that by using listen method come with the server object
//listen method takes in 3 arguments portnumber,hostname,callbackfunction
//callback function get fired when we first stred listening to the request
server.listen(3000, "localhost", () => {
  console.log("litening to the localhost on port 3000");
});
