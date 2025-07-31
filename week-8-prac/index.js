const express = require("express");

const app = express();
const port = 3000;

app.post("/user/signup", function (req, res) {
    res.json({
        message: "Signup endpoint"
    })

});

app.post("/user/signin", function (req, res) {

    res.json({
        message: "Signin endpoint"
    })

});

app.get("/user/purchases", function(req, res) {
    // you would expect that you can pay u money
    res.json({
        message: "These are the courses where you have enrolled"

    })
})

app.post("/course/purchase", function(req, res) {
    res.json({
        message: "courses endpoint"
    })
});

app.get("/courses", function(req, res) {
    res.json({
        message: "courses"
    })
})
 
app.listen(3000);
