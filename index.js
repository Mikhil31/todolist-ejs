const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date= require(__dirname+ "/date.js");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let list = ["Groceries"];
let workItems = [];

app.get("/", function (req, res) {
  var day =date.getDate();
  console.log(day);
  res.render("list", { today: day, items: list });
});

app.post("/", function (req, res) {
  let newItem = req.body.addItems;
  list.push(newItem);
  res.redirect("/");
});



app.listen(3000);
