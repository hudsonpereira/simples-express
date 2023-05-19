const express = require("express");

const app = express();
app.set("view engine", "ejs");

var counter = 0;

app.get("/", (req, res) => {
  counter++;
  res.render("index", {
    counter,
  });
});

app.get("/obras", (req, res) => {
  res.sendFile(__dirname + "/obras.html");
});

app.get("/texto", (request, response) => {
  response.send("pega esse texto ai");
});

app.listen(3000);
