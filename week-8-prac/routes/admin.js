const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db")

// adminRouter.use(adminMiddleware); // if user loged in tabhi ye route chale

adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "Admin signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "Admin signin endpoint"
    })
})

adminRouter.post("/course", function(req, res){
    res.json({
        message: "admin course endpoint"
    })
})

adminRouter.put("/course", function(req, res){
    res.json({
        message: "admin course endpoint"
    })
})

adminRouter.get("/course/bulk", function(req, res){
    res.json({
        message: "admin course endpoint"
    })
})


module.exports = {
    adminRouter: adminRouter
}