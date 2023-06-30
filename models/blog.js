const mongoose = require("mongoose");

//creating a construct which can be use to build a schema.
const schema = mongoose.Schema;

//using schema construct to build a schema
//it takes two argument first argument define the schema and second argument is option
//we can set timestamp as true to monitor the created and last updat of the record
const blogSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//model method takes in two parameter i.e. collection name in singular form and schema which the collection based on
//it is important to pass the first argument in the singular form because mongoose will pluralize it and then look in
//the database( in this case mongoose will look for blogs collection in database)
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
