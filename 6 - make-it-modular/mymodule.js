const { fstat } = require("fs")
const fs = require("fs");
const path = require("path");

module.exports = (directory, fileExtension, callback) => {
  fs.readdir(directory, (err, files) => {
    if (err) return callback(err);

    files = files.filter((file) => {
      return path.extname(file) === "." + fileExtension
    })

    callback(null, files)
  })
}