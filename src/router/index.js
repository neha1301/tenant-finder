const express = require("express");
const auth = require("./authRouter");
const router = express.Router();

router.use(auth);

module.exports = router; 
