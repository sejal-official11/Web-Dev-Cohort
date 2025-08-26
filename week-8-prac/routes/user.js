// const express = require("express");
// const Router = express.Router;

const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "12345";

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName; // destructuring
  //  adding zod validation
  //   hash the password so plaintext password is not stored in the db
  // Creating the db storing data
  // put inside the try catch block

  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    message: "Signup succeeded",
  });
});

userRouter.get("/signin", async function (req, res) {
  const { email, password } = req.body;
  //Ideally password should be hashed, and hence you can't compare the user provided password and database password
  const user = await userModel.findOne({ // either the user or undefined
    email: email,
    password: password,
  });
  if (user) {
    // create the jwt
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );

    // Do cookie logic

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect cred",
    });
  }
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "user purchases endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
