/* Import modules here: express, dotenv, router, path, body-parser */
const path = require("path");
const express = require("express");
const app = express();
const bp = require("body-parser");
const env = require("dotenv").config();
const mysql = require("mysql2");
const dotenv = require("dotenv");

/* Router Module for handling routing */
const router = express.Router();
app.use('/', router);
router.use(bp.json())
router.use(bp.urlencoded({ extended: true}))

/* Connection to MySQL */
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});
/* Connection to DB*/
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected DB: " + process.env.MYSQL_DATABASE);
});



router.get('/',(req,res)=>{
    return res.send('hello world')
});

router.get('/student', function (req, res){
    connection.query('SELECT * FROM personal_info', function (error, results){
        if(error) throw error;
        return res.send({ error: false, data: results, message: 'Student list' });
    });
});

router.post('/student', function (req, res){
    console.log(req.body);
    let student = req.body.student;
    console.log(student);

    if (!student) {
        return res.status(400).send({error: true, message:'Please provide Student Information'});
    }

    connection.query("INSERT INTO personal_info SET ?", student, function (error, results){
        if(error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Insert student' });
    }); 
});

router.get('/student/:id', function (req, res) {
    console.log(req.params.id);
    let student_id = req.params.id;
    console.log(student_id);

    if (!student_id) {
        return res.status(400).send({ error: true, message: 'Please provide student id.' });
    }
    connection.query("SELECT * FROM personal_info where StudentID = ?", student_id, function (error, results) {
    if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Student retrieved' });
    });
});

router.put('/student', function (req, res){
    console.log(req.body);
    let student = req.body.student;
    console.log(student);

    if (!student) {
        return res.status(400).send({error: true, message:'Please provide Student Information'});
    }

    connection.query("UPDATE personal_info SET ? WHERE StudentID = ?", [student, student.StudentID], function (error, results){
        if(error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Update student' });
    }); 
});

router.delete('/delete', function (req, res){
    console.log(req.body);
    let student = req.body.student;
    console.log(student);

    if (!student) {
        return res.status(400).send({error: true, message:'Please provide Student Information'});
    }

    connection.query("DELETE FROM personal_info WHERE StudentID = ?", student, function (error, results){
        if(error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Delete student' });
    }); 
});
 

/* Run Server */
app.listen(process.env.PORT, function () {
    console.log("Server listening at Port " + process.env.PORT);
});