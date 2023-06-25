const express = require('express')
const server = express()
const cors = require('cors')
const backend = require('./Components/backend')
//connect with frontend
server.use(cors({orgin:'http://localhost:3000'}))
server.use(express.json())


//request for login
server.post('/login',(req,res)=>{
    backend.userLogin(req.body.id,req.body.pass).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//request for Registration
server.post('/register',(req,res)=>{
    backend.userRegister(req.body.id,req.body.name,req.body.email,req.body.prof,req.body.contact,req.body.profile,req.body.password,req.body.day)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/getdata/:id',(req,res)=>{
    backend.getuser(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/edituser',(req,res)=>{
    backend.edituser(req.body.id,req.body.name,req.body.email,req.body.prof,req.body.contact,req.body.password,req.body.day).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/addqustion',(req,res)=>{
    backend.question(req.body.eid,req.body.name,req.body.ques,req.body.uimg,req.body.date)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/getQuestion',(req,res)=>{
    backend.getQuestion().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//port setting for server
server.listen(8000,()=>{console.log("server started at 8000");})