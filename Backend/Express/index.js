import express from "express";

const app = express();

// const users = [
//   {
//     name: "Sejal",
//     kidneys: [
//       {
//         healthy: false,
//       },
//       {
//         healthy: true,
//       },
//     ],
//   },
// ];

// app.use(express.json());

// // find kidneys
// app.get("/", function (req, res) {
//   const SejalK idneys = users[0].kidneys;
//   const numberOfKidneys = SejalKidneys.length;
//   let numberOfHealthyKidneys = 0;
//   for (let i = 0; i < numberOfKidneys; i++) {
//     if (SejalKidneys[i].healthy === true) {
//       numberOfHealthyKidneys += 1;
//     }
//   }
//   const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

//   res.json({
//     numberOfKidneys,
//     numberOfHealthyKidneys,
//     numberOfUnhealthyKidneys,
//   });
// });

// //Add kidneys

// app.post("/", function (req, res) {
//   console.log(req.body); //undefined
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//     healthy: isHealthy,
//   });
//   res.json({
//     msg: "Done",
//   });
// });

// //411
// app.put("/", function (req, res) {
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     users[0].kidneys[i].healthy = true;
//   }

//   res.json({});
// });

// app.delete("/", function (req, res) {
//   // only if atleast one unhealty kidney
//   if (atleastOneUnhealthyKidney()) {
//     const newKidneys = [];
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//       if (!users[0].kidneys[i].healthy) {
//         newKidneys.push({
//           heathy: true,
//         });
//       }
//     }
//     users[0].kidneys = newKidneys;
//   } else {
//     res.sendStatus(411).json({
//       msg: "You have no bad kidneys",
//     });
//   }
//   users[0].kidneys = newKidneys;
//   res.json({ msg: "done" });
// });

// function isThereAtleastOneUnhealthyKidney() {
//   let atleastOneUnhealthyKidney = false;
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     if (!users[0].kidneys[i].healthy) {
//       atleastOneUnhealthyKidney = true;
//     }
//   }
//   return atleastOneUnhealthyKidney;
// }


// import fs from 'fs';

// app.get('/files/:fileName', function(req, res) {
//   const name = req.params.fileName;
//   console.log(name);
//   fs.readFile(name, "utf-8", (err, data) => {
//     res.json({
//       data
//     })
//   })
// })
// app.listen(3000);
        