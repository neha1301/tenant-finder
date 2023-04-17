const express = require('express');
const router = express.Router();
const { propertyController } = require("../controller");

router.get('/properties', async (req, res) => {
    const { propertyName } = req.body;
    try {
        let result = await propertyController.saveProperty(req.body);
        res.status(201).json({
            status: "SUCCESS", // | "FAILED",
            message: "Property saved successfuly.",
            // error: "",
            data: result,
        });
    } catch (error) {
        console.log("Error Occured while saving property: ", propertyName);
        res.status(400).json({
            status: "FAILED",
            error: "Something went wrong while saving property."
        });
    }
})

router.post('/save-property', async (req, res) => {
    try {
        let result = await propertyController.saveProperty();
        res.status(200).json({
            status: "SUCCESS", // | "FAILED",
            message: "Retrieved property list successfuly.",
            // error: "",
            data: result,
        });
    } catch (error) {
        console.log("Error Occured while retrieved property list");
        res.status(400).json({
            status: "FAILED",
            error: "Something went wrong while while retrieved property list."
        });
    }
})

module.exports = router; 
