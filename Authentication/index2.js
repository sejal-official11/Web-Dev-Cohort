const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const JWT_SECRET = "msijdfbweiufbjdviubsdsfj";

const users = [];

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  let foundUser = null;

  if (users.find((u) => u.username === username && u.password === password)) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.json({
      message: "Incorrect credentials",
    });
    return;
  }
});

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => username === u.username)) {
    res.json({
      message: "You are already signed in",
    });
    return;
  }
  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are signed in",
  });
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      message: "You are not logged in ",
    });
  }
}

app.get("/me", auth, function (req, res) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData.username) {
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
      if ((users[i].username = decodedData.username)) {
        foundUser = users[i];
      }
      break;
    }

    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  }
  return;
});

app.listen(3000);
