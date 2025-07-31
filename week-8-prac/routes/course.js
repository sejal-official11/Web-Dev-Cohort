const express = require("express");

const {Router} = require("express");


const courseRouter = Router();

  courseRouter.post("/purchase", function (req, res) {
    res.json({
      message: "courses endpoint",
    });
  });


    Router.get("/preview", function (req, res) {
    res.json({
      message: "courses",
    });
  });


module.exports = {
    courseRouter: courseRouter
}
