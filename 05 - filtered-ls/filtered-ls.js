const fs = require("fs");
const path = require("path");

const directory = process.argv[2];
const fileExtension = "." + process.argv[3];

fs.readdir(directory, (err, files) => {
  if (err) return console.log(err);

  files.forEach((file) => {
    if (path.extname(file) == fileExtension) {
      console.log(file);
    }
  });
});
