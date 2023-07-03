const express = require("express");
const Blog = require("../models/blog");

//using Router method which will attach all the routes to this object
const router = express.Router();

router.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

router.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/blogs", (req, res) => {
  //req.body is object which satify the blog model so we directly passed it else we can also do like
  //const blog = new Blog({
  //   title: req.body.title,
  //   snippet: req.body.snippet,
  //   body: req.body.body,
  // });
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      console.log("Seccesfully added");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

/********************************Adding a new Blogs******************************************/

/*
  app.get("/add-blog", (req, res) => {
    //using the model construct which was exported , we can create new instance of the blog and
    //using those instance we can perform differnt operation
    const blog = new Blog({
      title: "third blog",
      snippet: "Snipper look like this",
      body: "Body of the blog",
    });
    //save method is used to save the data to the database
    //save is async func with resturn a promise and promise contain a result which we can tape on using the then()
    blog
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });*/

/******************************Getting all blogs********************************************* */
/*app.get("/all-blogs", (req, res) => {
    //getting all the document usinf find method
    //await Blog.find().sort({ createdAt: -1 }); // returns age starting decending order of createdAt
    //await Blog.find().sort({ createdAt: 1 }); // returns age starting ascending order of createdAt
    Blog.find()
      .sort({ createdAt: -1 })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }); */

/***********************************Getting single blog******************************************************/
/*app.get("/single-blog", (req, res) => {
    //getting single document using findbyid method
    Blog.findById("649fa1826d092d9661da6679")
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        comnsole.err;
      });
  });*/

router.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      //sending the jason data to the frontend
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
