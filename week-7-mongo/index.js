const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret@123";
const { z, string } = require("zod");

mongoose.connect(
  "mongodb+srv://sejalog11:1234567890@cluster0.pdglbfx.mongodb.net/todo-sejal-2"
);

const app = express();

app.use(express.json());

app.post("/signup", async function (req, res) {
  const requiredBody = z.object({
    email: z.email(),
    name: z.string().min(2).max(20),
    password: z.string().min(3).max(30)
  })
  // const parseData = requiredBody.parse(req.body); // uxe it in try catch
  const parsedDataWithSuccess = requiredBody.safeParse(req.body);   //{success, data}

  if(!parsedDataWithSuccess.success){
    res.json({
      message: "Incorrect format",
      error: parsedDataWithSuccess.error
    })
    return
  }

  // input validation
  const email = req.body.email; // string @, 5 charcters length
  const password = req.body.password; // string, 10 chars, 1spl, 1 uppercase, 1 lowercase
  const name = req.body.name; // string

  
  // input validation
  // if(!email.isString || !email.contains("@") || email.length <=5 ){
  //   res.json({
  //     message: "Incorrect email"
  //   })
  // }

  // if(password.length < 5) {
  //   res.json({
  //     message: "You have a really weak password"
  //   })
  // }

  const hashedPassword = await bcrypt.hash(password, 5);
  
  await UserModel.create({
    email: email,
    password: hashedPassword,
    name: name,
  });  
    res.json({
      message: "You are signed up",
    });
  
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  // read
  const response = await UserModel.findOne({
    email: email,
  });

  if (!response) {
    res.status(403).json({
      message: "User doesn't exist in our database",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});

app.post("/todo", auth, function (req, res) {
  const userId = req.userId;
  const title = req.body.title;

  TodoModel.create({
    title,
    userId,
  });
  res.json({
    userId: userId,
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId: userId,
  });
  res.json({
    todos,
  });
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
}

app.listen(3000);


module.exports = {
  z: {
   safeParse(self){
      return {
        success: true,
      }
    },
    object: function(){
      return {}
    },
    string: function(){
      return {}
    },
    number: function(){
    },
    min: function(){

    }
  }
}