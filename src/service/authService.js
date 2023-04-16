const { User } = require('../model');

async function saveUser({ firstName, lastName, email, mobileNumber, password}) {
    const user = new User({ firstName, lastName, email, mobileNumber, password });
    try {
        let result = await user.save();
        console.log("User Saved Sucessfully: ", result);
        return result;
    } catch (error) {
        console.log("Error Occured while saving userData: ", error);
        throw new Error(error);
    }
}
async function findUser(mobileNumber) {
    try {
        let result = await User.findOne({ mobileNumber: mobileNumber })
        console.log("Found User Sucessfully: ", result);
        if (result?.mobileNumber) {
            return result;
        }
        else {
            throw new Error("abcd");
        }
    } catch (error) {
        console.log("Error Occured while finding userData: ", error);
        throw new Error(error);
    }
}
module.exports = {
    saveUser,
    findUser
}
