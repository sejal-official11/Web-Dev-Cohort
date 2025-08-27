const {jwt} = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if(decoded){
        req.userId = decoded.id;
        next();
    } else {
        res.status(403).json({
            message: "You are ot signed in"
        })
    }
   
}

module.exports = {
    userMiddleware : userMiddleware

}