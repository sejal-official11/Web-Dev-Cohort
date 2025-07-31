const express = require("express");
// const router = express.Router;

const { Router } = require("express");

const userRouter = Router();

    userRouter.post("/signup", function (req, res) {
    res.json({
        message: "Signup endpoint"
    })

});

userRouter.post("/signin", function (req, res) {

    res.json({
        message: "Signin endpoint"
    })

});

userRouter.get("/purchases", function(req, res) {
    // you would expect that you can pay u money
    res.json({
        message: "These are the courses where you have enrolled"

    })
})



module.exports = {
    // createUserRoutes: createUserRoutes 
    userRouter: userRouter
}


