 /* Import modules here: express, dotenv, router */
const path = require("path");
 const express = require("express");
const app = express();

const dotenv = require("dotenv"); 
dotenv.config();

/* Router Module for handling routing */
const router = express.Router();
app.use("/", router); 

 /* Connection to MySQL */
const mysql = require('mysql2');
var connection = mysql.createConnection({
    host    : process.env.MYSQL_HOST,
    user    : process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

/* Connection to DB*/
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected DB: " + process.env.MYSQL_DATABASE);
}); 

/* Run Server */
app.listen(process.env.PORT, function() {
    console.log("Server listening at Port " + process.env.PORT);
});

router.get("/cis-students", function (req, res){
    console.log("Retrieved all courses in tinycollege...");
    let sql = "SELECT CONCAT (stu_fname,' ' , stu_lname) as stu_name, stu_gpa as GPA FROM student WHERE dept_code = 'CIS' ORDER BY stu_name ASC";

    connection.query( sql, function (error, results) {
        if (error) throw error;
        console.log(results.length + " students returned");
        return res.send(results);
    });
});

router.get("/cis-students-list", function (req, res){
    console.log("Retrieved all courses in tinycollege...");
    let sql = "SELECT CONCAT (stu_fname,' ' , stu_lname) as stu_name, stu_gpa as GPA FROM student WHERE dept_code = 'CIS' ORDER BY stu_name ASC";

    connection.query( sql, function (error, results) {
        if (error) throw error;
        console.log(results.length + " students returned");
        let output = "<h2>CIS Students</h2><ul>"
        results.forEach(student =>{
            output += "<li>" + student.stu_name
            output += "&nbsp" + "(GPA:" + student.GPA+")"
            output += "</li>"
        });
        output += "</ul>"
        res.send(output);
    });
});