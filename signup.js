const express = require('express')
const route = express.Router();

route.post('/post',(req,res)=>{
    const body = req.body;
    res.json({
        status:'create-post',
        title:body.title,

    })
})

route.post('/signup',(req,res)=>{
    const body = req.body;
    res.json({
        status:'signup',
        name:body.name,
        email:body.email,
    })
})

module.exports=route;