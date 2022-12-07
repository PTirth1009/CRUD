const mongoode = require("mongoose");

mongoode.connect("mongodb://localhost:27017/StudentData",
{   

    useNewUrlParser: true ,
    useUnifiedTopology : true,
    
})
.then(() =>{console.log("connection Succesfully")})
.catch((err)=>{console.log(err)});


