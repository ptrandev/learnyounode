const net = require("net");

function zeroFill(number) {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
}

function currentTime() {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    zeroFill(d.getMonth() + 1) +
    "-" +
    zeroFill(d.getDate()) +
    " " +
    zeroFill(d.getHours()) +
    ":" +
    zeroFill(d.getMinutes())
  );
}

const server = net.createServer((socket) => {
  socket.end(`${currentTime()}\n`);
});

server.listen(Number(process.argv[2]));
