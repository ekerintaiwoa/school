
const express = require('express');
const router = express.Router();

const userController = require('./controller/userController');
 const backendController =  require('./controller/backendController');


router.get('/', userController.index) ;









// admincontroller routes
 router.get('/admin/register' ,backendController.register)

 router.get('/admin/login' ,backendController.login)


 router.get('/admin' ,backendController.index)













module.exports= router 