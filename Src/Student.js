const express = require("express");
const router = new express.Router();
const student = require("../model/model");

router.post("/student" ,async(req , res) => {
    try {
    const user = new student(req.body);    
    console.log(req.body);
    const Data =  await user.save();
    res.status(201).send(Data);    
    } catch (error) {
        res.status(400).send(error);
    }
        
});

router.get("/student" , async(req  , res )=>{
    try {
        const StudenD = await student.find();
        res.status(200).send(StudenD);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/student/:id" , async(req  , res ) =>{
    try {
         const _id = await req.params.id;
         const StudentDa = await student.findById(_id);
        // console.log(StudentDa);
          if(!StudentDa){
              return res.status(404).send();
             }else{
             res.status(200).send(StudentDa);
          }
    
        } catch (e) {
        res.send(e);
    }
});

router.get("/student/:name" , async(req  , res ) =>{
    try {
         const Name = await req.params.name;
         const StudentDat = await student.findOne(Name);
        // console.log(StudentDa);
          if(!StudentDat){
              return res.status(404).send();
             }else{
             res.status(200).send(StudentDat);
          }
    
        } catch (e) {
        res.send(e);
    }
});
router.patch("/student/:id" , async(req ,res ) =>{
    try {
        const _id = await req.params.id;
        const UpdateStudent = await student.findByIdAndUpdate(_id , req.body ,{new : true} );
        res.status(200).send(UpdateStudent);
    } catch (e) {
        res.status(500).send(UpdateStudent);
    }
});

router.delete("/student/:id" , async(req ,res ) =>{
    try {
        const _id = await req.params.id
        const Delete = await student.findByIdAndDelete(_id); 
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(Delete);
    } catch (e) {
        res.status(500).send(e);
    }
})



module.exports = router;