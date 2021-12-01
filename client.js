const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

// event handler to let the client know that connection has been setup wwith server
conn.on('connect',()=>{
console.log("Successfully connected to game server");
});


conn.on('connect', () => {
  conn.write("Name: AK");
});


//event handler to get data from server
conn.on('data',(data)=>{
  console.log(data);
});



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports=connect;