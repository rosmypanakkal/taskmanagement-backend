// loads .env file contents into process.env by default
require('dotenv').config()

// import express
const express=require('express')


// import cors
const cors=require('cors')

// import router
const router=require('./Routes/router')

const db=require("./DB/connection")
const appMiddleware=require('./Middlewares/appMiddleware')

// create a backend application using the express
const taskmServer=express()

// use cors
taskmServer.use(cors())
taskmServer.use(express.json())//returns middleware that only parses json
taskmServer.use(appMiddleware)
taskmServer.use(router)

// port creation
const PORT=4000 || process.env.PORT

// server lisening
taskmServer.listen(PORT,()=>{
    console.log("lisenting on port" +PORT);
})

// localhost :4000->res taskmServer is started
taskmServer.get('/',(req,res)=>{
    res.send(`<h2>task management server is started</h2>`)

})