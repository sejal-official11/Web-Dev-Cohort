

function createCourseRoute(app) {
  app.post("/course/purchase", function (req, res) {
    res.json({
      message: "user purchase",
    });
  });

  app.get("/courses/preview", function (req, res) {
    res.json({
      message: "courses endpoint",
    });
  });
}

module.exports = {
  createCourseRoute: createCourseRoute,
};
