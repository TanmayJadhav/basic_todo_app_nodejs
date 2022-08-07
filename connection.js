const  mysql = require("mysql")

const mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "todo",
    multipleStatements : true


});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Database Connected")
    }
    else
    {
        console.log("Database Connection Failed")
    }
});

module.exports = mysqlConnection;