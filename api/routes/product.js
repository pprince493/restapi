const express = require('express');
const router = express.Router();
const product = require('../model/product');
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {
    // res.status(200).json({
    //     msg:'this is product get request'
    // })
    product.find()
        .then(result => {
            res.status(200).json({
                productData: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })

})




router.get('/:id', (req, res, next) => {

    // console.log(req.params.id);

    product.findById(req.params.id)
        .then(result => {
            console.log(result);
            res.status(200).json({
                productData: result

            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })

})








router.post('/', (req, res, next) => {
    // res.status(200).json({
    //     msg:'this is product post request'
    // })

    // console.log(req.body);
    const product = new product({
        _id: new mongoose.Types.ObjectId,
        code: req.body.code,
        title: req.body.title,
        description: req.body.description,
        mrp: req.body.mrp,
        sp: req.body.sp,
        discountPercent: req.body.discountPercent,
        ImagePath: req.body.ImagePath


    })
    product.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                newproduct: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

// for delete schema

router.delete('/:id',(req,res,next)=>{
    product.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'product deleted',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})



module.exports = router;
