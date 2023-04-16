const { authService } = require("../service");

function signUpUser({ firstName, lastName, email, mobileNumber, password}) {
    return new Promise(async (resolve, reject) => {
       try {
            let result = await authService.findUser(mobileNumber);
            reject({
                code: "USER_EXISTS",
                message: "User Already Exists"
            })
        } catch (error) {
            console.log("Error in finding the user ", JSON.stringify(error));

            try {
                let result = await authService.saveUser({ firstName, lastName, email, mobileNumber, password })
                resolve(result)
            } catch (error) {
                reject({
                    code: "SAVE_USER_EXCEPTION",
                    message: " Failed To Save User"
                })
            }
        }
    })
}
module.exports = {
    signUpUser
}
