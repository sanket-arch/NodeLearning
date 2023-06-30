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

  //For routing
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      //setting status codes to let brwoser know about the status of the request
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    //this case is used to redirect the user to the new location
    case "/about-me":
      res.statusCode = 301; //status code is to let browser know that content has shifted to another location
      res.setHeader("Location", "/about"); //redirecting the user
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 400;
  }

  fs.readFile(path, (err, data) => {
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
