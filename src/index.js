const express = require("express");
const config = require("./config");
const router = require("./router");
const app = express();

require('./dbConnection');

app.use(express.json())

app.use(router);

// // To serve UI and server from same server
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.listen(config.PORT, () => {
    console.log(`server is running at port no ${config.PORT}`);
});
