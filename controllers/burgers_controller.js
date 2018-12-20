var express = require("express");
var router = express.Router();

var cat = require("../models/burgers.js");

router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger", function(req, res) {
  burger.insertOne([
    "burger_name", 
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.insertOne({
    devored:true
  }, condition,function(data){
    res.redirect("/");
  });
  console.log("condition", condition);
});

module.exports = router;