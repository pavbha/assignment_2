const express =require('express')
const app=express()
const homeRoute = require('./home')
// const travelRoute = require('./travel')
const signupRoute=require('./signup')

const port =3005;


function middleware(req,res,next){
    const name=req.params.name
    const day=new Date();
    const currentday=day.toString()
    console.log(`day=${currentday}`)
    console.log('LOG:' +req.originalUrl+" "+'called by Anonymous');
    next();

}

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to my API')
})

app.get('/greetings',(req,res)=>{
    res.send('Welcome,Anonymous!')
})

app.use('/home/:name',middleware,homeRoute)
// app.use('/travel',middleware, travelRoute)
app.use('/signup',signupRoute)




app.listen(port,()=>{
    console.log('sever started on port 3005')
})