const express = require("express");
const mogoose = require("mongoose");

//URI for mongoDB URI
const dbURI =
  "mongodb+srv://sanket:sanket123@cluster0.u2554.mongodb.net/node-tuts?retryWrites=true&w=majority";
//initialize the express app
//using this variable we can use different methods of express
const app = express();

//connecting to the mongodb
mogoose
  //connect function is async function.
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    //listening to the server
    const server = app.listen(3000, "localhost");
  })
  .catch((err) => {
    console.log(err);
  });

//register view engine
app.set("view engine", "ejs");

//defining the middleware and staic file
app.use((req, res, next) => {
  console.log("Requeste made");
  console.log(req.hostname);
  next();
});

//Making static file accessible to the frontend
app.use(express.static("public"));

//listening to the get request
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  //render method takes two argument ejs path and a object
  //object has key as variable name and value as data we want to pass down
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//redirecting
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

//404 page
//use method is used to create a middleware
//it will get fired for every routes if control reaches at this point
//this should be the very last in the file
app.use((req, res) => {
  res.status(404);
  res.sendFile("./views/404.html", { root: __dirname });
});
