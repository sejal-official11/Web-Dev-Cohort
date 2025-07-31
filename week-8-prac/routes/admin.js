const { Router } = require(express);
const adminRouter = Router();

adminRouter.post("/signup", function(req, res){
    res.json({
        message: "admin endpoint"
    })
})

adminRouter.post("/signin", function(req,res){
    res.json({
        message: "Admin endpoint"
    })
})

adminRouter.post("/course", function(req, res){
    res.json({
        message: "admin course endpoint"
    })
})

adminRouter.post("/course/preview", function(req, res){
    res.json({
        message: "admin course endpoint"
    })
})


module.exports = {
    adminRouter: adminRouter
}