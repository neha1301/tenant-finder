const express = require("express");
const config = require("./config");
const router = require("./router");
const app = express();

require('./dbConnection');

app.use(express.json())

app.use(router);

app.listen(config.PORT, () => {
    console.log(`server is running at port no ${config.PORT}`);
});
