const express = require("express");
const blogController = require("../controllers/blogControllers");
//using Router method which will attach all the routes to this object
const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);


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


module.exports = router;
