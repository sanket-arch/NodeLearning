const fs = require("fs");

//creating a readstream
const readstream = fs.createReadStream("./blogs/blog2.txt", {
  encoding: "utf8",
});

//creating a write stream
//this will create new file if that file does not exist.
const writestream = fs.createWriteStream("./blogs/blogs3.txt");

//reading data using read stream
//on is event listener which get triggered everytime new cgunks of data will arrived
readstream.on("data", (chunk) => {
  console.log("------New Chunks---------");
  console.log(chunk);

  //write file using write stream
  writestream.write(chunk);
});

//Piping
//we can copy data from readstream to write stream using pipe method
readstream.pipe(writestream);