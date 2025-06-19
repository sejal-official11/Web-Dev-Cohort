import express from "express";
import bodyParser from "body-parser";

const app = express();

// function loggerMiddleware(req, res, next) {
//   console.log("Method is " + req.method);
//   console.log("Host is " + req.hostname);
//   console.log("Date is " + new Date());

//   next();
// }

app.use(bodyParser.json());

app.get("/sum", function (req, res) {
  console.log(req.body);
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    answer: a + b,
  });
});

// app.get("/multiply", function (req, res) {
//   const a = req.query.a;
//   const b = req.query.b;

//   res.json({
//     answer: a * b,
//   });
// });

// app.get("/subtract", function (req, res) {
//   const a = req.query.a;
//   const b = req.query.b;
//   res.json({
//     answer: Math.abs(a - b),
//   });
// });

// app.get("/divide", function (req, res) {
//   const a = req.query.a;
//   const b = req.query.b;

//   res.json({
//     answer: a / b,
//   });
// });

app.listen(3000);
