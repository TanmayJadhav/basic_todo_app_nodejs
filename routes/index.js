const express = require("express");
const router = express.Router();
const mysqlConnection = require("../connection");

router.get("/", async (req, res) => {
  mysqlConnection.query("select * from todo", (err,allTodo) => {
    if (err) throw err
    res.render("index", { todo: allTodo });
  });
  
});


module.exports = router;
