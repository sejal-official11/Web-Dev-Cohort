import express from "express";

const app = express();

//function that returns a boolean if the age of the person is more that 14

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14 && age <= 55) {
    next();
  } else {
    res.json({
      msg: "Sorry you are not of age yet",
    });
  }
}

app.use(isOldEnoughMiddleware);

app.get("/ride2", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 2",
  });
});

app.get("/ride1", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 1",
  });
});

// app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
//   res.json({
//     msg: "You have successfully riden the ride 2",
//   });
// });

// app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
//   res.json({
//     msg: "You have successfully riden the ride 1",
//   });
// });

app.listen(3000);
