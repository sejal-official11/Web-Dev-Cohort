const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "admin";

// adminRouter.use(adminMiddleware); // if user loged in tabhi ye route chale

adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  await adminModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    message: "Admin signup done",
  });
});

adminRouter.get("/signin", async function (req, res) {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });
  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.json({
      token: token
    });
  } else {
    res.status(403).json({
      message: "Incorrect cred",
    });
  }
});

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "admin course endpoint",
  });
});

adminRouter.put("/course", function (req, res) {
  res.json({
    message: "admin course endpoint",
  });
});

adminRouter.get("/course/bulk", function (req, res) {
  res.json({
    message: "admin course endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
