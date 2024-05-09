const express = require('express');
const app= express();
const studentroute=require('./api/routes/student')
const facultyroute=require('./api/routes/faculty')
const productroute=require('./api/routes/product')
const mongoose = require('mongoose')
const bodyparser=require('body-parser')


const password = encodeURIComponent('Prince@493');
mongoose.connect(`mongodb+srv://sbs:${password}@sbs.o65ioy0.mongodb.net/test?retryWrites=true&w=majority`);



mongoose.connection.on('error',err=>{
    console.log('connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log('connected with database')
});

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.use('/',studentroute)
app.use('/faculty',facultyroute)
app.use('/product',productroute)

app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request'
    })
    })
    module.exports = app;