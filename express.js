const express = require("express");

//initialize the express app
//using this variable we can use different methods of express
const app = express();

//listening to the server
const server = app.listen(3000, "localhost");

//listening to the get request
app.get("/", (req, res) => {
  //send method is used to send the response to the frontend
  //this method automatically set the socntent type and also
  //we dont have to set the status code most of the time
  //res.send("hello");

  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirecting
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page
//use method is used to create a middleware
//it will get fired for every routes if control reaches at this point
//this should be the very last in the file
app.use((req, res) => {
  res.status(404);
  res.sendFile("./views/404.html", { root: __dirname });
});
