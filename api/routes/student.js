const express= require('express');
const router=express.Router();
const Student=require('../model/student');
const mongoose=require('mongoose');


router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //     msg:'this is student get request'
    // })
    Student.find()
    .then(result=>{
        res.status(200).json({
            studentData:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })

})




router.get('/:id',(req,res,next)=>{

   // console.log(req.params.id);

   Student.findById(req.params.id)
   .then(result=>{
    console.log(result);
       res.status(200).json({
           studentData:result
           
       })
   })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error:err
       })
   })

})








router.post('/',(req,res,next)=>{
    // res.status(200).json({
    //     msg:'this is student post request'
    // })

   // console.log(req.body);
   const student=new Student({
    _id:new mongoose.Types.ObjectId,
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    gender:req.body.gender

    })
    student.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

module.exports=router;
