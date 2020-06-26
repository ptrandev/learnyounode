const http = require("http");

const url = process.argv[2];

let str = "";

http.get(url, (response) => {
  response.on("error", (err) => {
    console.error(err);
  });

  response.on("data", (data) => {
    str += data.toString();
  });

  response.on("end", () => {
    console.log(str.length);
    console.log(str);
  });
});
