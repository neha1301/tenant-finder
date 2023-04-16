const express = require('express');
const router = express.Router();
const { authController } = require("../controller");

router.post('/signup', async (req, res) => {
    const { mobileNumber } = req.body;

    try {
        let result = await authController.signUpUser(req.body);
        res.status(201).json({ Message: "user registered successfully" });
    } catch (error) {
        console.log("Error Occured while saving userData: ", mobileNumber);
        if (error.code === "USER_EXISTS") {
            return res.status(422).json({ error: "mobileNumber exist" });
        } else {
            res.status(500).json({ error: "failed to registered" });

        }
    }

})
module.exports = router; 
