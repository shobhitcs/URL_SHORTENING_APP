require('dotenv').config()
const cors = require('cors');
const express=require('express');
const morgan=require('morgan');
const routes=require('./routes/urlRoutes');
const mongoose=require('mongoose')
const app=express()

mongoose.connect(process.env.MONGO_URI).then((result)=> {console.log('connected to db');
app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT);
})}).catch((err)=> console.log(err))

app.use(cors({origin:['https://urlshortify.onrender.com']}))
app.use(express.json());
app.use(morgan('dev'))
app.use(routes)