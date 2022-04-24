// DEPENDENCIES
const express = require("express");
const rocks = require("./models/rock.js");

// CONFIGURATION
const app = express();

// ROUTES


// app.get("/rocks/:index", (req, res) => {
//   const { index } = req.params;
//   if (rocks[index]) {
//     res.send(rocks[index]);
//   } else {
//     res.send("cannot find any rocks at this index: " + index);
//   }
// });

// app.get("/rocks", (req, res) => {
//   res.send(rocks);
// });

app.get("/", (req, res) => {
res.send("Welcome to Success! Let's be productive!");
})



// EXPORT
module.exports = app;