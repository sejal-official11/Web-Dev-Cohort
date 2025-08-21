// const express = require("express");
// const Router = express.Router;

const {Router} = require("express");

const userRouter = Router();


function createUserRoutes(app) {
  app.post("/signup", function (req, res) {
    res.json({
      message: "signup endpoint",
    });
  });

  app.post("/signin", function (req, res) {
    res.json({
      message: "signin endpoint",
    });
  });

  app.get("/purchases", function (req, res) {
    res.json({
      message: "user purchases",
    });
  });
}

module.exports = {
  createUserRoutes: createUserRoutes,
};
