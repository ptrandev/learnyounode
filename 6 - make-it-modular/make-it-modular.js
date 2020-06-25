const filterls = require("./mymodule.js");
const fs = require("fs");
const { listenerCount } = require("process");

const directory = process.argv[2];
const fileExtension = process.argv[3];

filterls(directory, fileExtension, (err, files) => {
  if (err) return console.error(err);

  files.forEach((file) => {
    console.log(file)
  })
})