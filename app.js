const express = require('express') ;
const app = express() ;
const ejs = require('ejs')
//const userController = require('./controller/userController');
const router = require('./router')


app.set('views','views');
app.set('view engine' ,'ejs') ;
app.use(express.static('public'));
app.use("/",router)




app.listen(4800, ()=>{

console.log("connected to port 4800")


})