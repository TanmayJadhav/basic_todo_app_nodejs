const { Template } = require("ejs");
const  express = require("express")
const  mysqlConnection = require("./connection")


const app = express()

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine","ejs");


app.use(require("./routes/todo"))
app.use(require("./routes/index"))




app.listen(3000,() => console.log("Server Started"))