const fs = require("fs");

fs.readFile(process.argv[2], (error, buffer) => {
  if (error) return console.error(error);

  const lines = buffer.toString().split("\n").length - 1;
  console.log(lines);
});