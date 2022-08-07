const  express = require("express")
const  router = express.Router()
const  mysqlConnection = require("../connection")

router.post("/add/todo",(req,res) => {
    const todo = req.body.todo;
    
    var query = "INSERT INTO todo(todo_list) values(?)";
    mysqlConnection.query(query,todo,(err) => {
        if (err) throw err
      
        console.log('Todo Added')
        res.redirect("/")
      });


})

.get("/delete/todo/:id",(req,res) => {
    const id = req.params.id
    
    var query = "delete from todo where id = ?";
    mysqlConnection.query(query,id,(err) => {
        if (err) throw err
      
        console.log('Todo Deleted')
        res.redirect("/")
    });
    
})


module.exports = router