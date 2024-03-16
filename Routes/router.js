const express=require('express');

const userController = require('../Controllers/userController')

const taskController=require('../Controllers/taskController')

const jwtMiddleware=require('../Middlewares/jwtMiddlewares')

// creation router object of express to defibe path
const router =new express.Router()

// using router object to define path


// register Api path
router.post('/register',userController.register)

// login api
router.post('/login',userController.login)

// add user task api
router.post('/task/add',jwtMiddleware,taskController.addUserTask)

module.exports=router