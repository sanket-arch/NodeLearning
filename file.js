//importing module
const fs = require("fs");

//reading file
//readFile method is async function
fs.readFile("blogs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  //toString method is used to extract actual data from the buffer
  console.log(data.toString());
});

//writing in the file

//if we are writing into the file which doesnot exist then it will crate a new file and
//write the data into automatically.
fs.writeFile("blogs/blog1.txt", "hello everyone", (err) => {
  if (err) console.log(err);
  console.log("written succesfully");
});

//directories

//Before creating any folder we check whether that concern folder already exists or not
if (!fs.existsSync("./assets")) {
  //we can create any folder using mkdir method
  //if that directory already exists then it will throw some error
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);
    else console.log("folder created");
  });
} else {
  //To delete any directory, we can use rmdir method
  fs.rmdir("./assets", (err) => {
    if (err) console.log(err);
    else console.log("Folder deleted");
  });
}

//Deleting the file
//to delete the file we can use unlink method
if (fs.existsSync("./blogs/deleteme.txt")) {
    fs.unlink("./blogs/deleteme.txt", (err) => {
      if (err) console.log(err);
      else console.log("file deleted");
    });
  }
