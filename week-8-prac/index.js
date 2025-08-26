const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin")
const app = express();
app.use(express.json()); //this middleware, is needed whenever the user want to send the request with some json data or parse



app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter)

// app.use("/api/v2/user", userRouter);
// app.use("/api/v2/course", courseRouter);


async function main()
{
     await mongoose.connect("mongodb+srv://admin:db%4011@cluster0.gzg3bzh.mongodb.net/coursera-database")
     app.listen(3000);
     console.log("listening on port 3000");
     
}

main()
   



