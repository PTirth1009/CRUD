
const express = require("express");
const Student = require("../model/model");
require("./Db/Connection");
//const student = require("../model/model");
const StudentR = require("./Student");
const app = express();
const  port = process.env.PORT || 3000;

app.use(express.json());
app.use(StudentR);


app.listen(port , ()=>{
    console.log(`Connnect succesFully of ${port} number`);
})
