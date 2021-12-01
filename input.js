const { connect } = require("./client");
// Stores the active TCP connection object.
let connection;

const setupInput = function (connect) {
  connection = connect;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w')
    // console.log("Move: up");
    connection.write("Move: up");

  if (key === 'a')
    // console.log("Move: left");
    connection.write("Move: left");
    
  if (key === 'd')
    // console.log("Move: right");
    connection.write("Move: right");
  if (key === 's')
    // console.log("Move: down");
    connection.write("Move: down");
};


module.exports = { setupInput };