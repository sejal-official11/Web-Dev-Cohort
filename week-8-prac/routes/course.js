function createCourseRoutes(app) {
  app.post("/course/purchase", function (req, res) {
    res.json({
      message: "courses endpoint",
    });
  });

  app.get("/courses", function (req, res) {
    res.json({
      message: "courses",
    });
  });
}

module.exports = {
    createCourseRoutes: createCourseRoutes
}
