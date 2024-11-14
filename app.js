const express = require('express')

const cors = require('cors')

const dotenv = require("dotenv")
const mongoose = require('mongoose')

const app = express()
app. use(cors())
app.use(express.json())
dotenv.config()
const PORT = 4000
mongoose.connect("mongodb+srv://routuprabhakar2000:routu123@cluster0.0o7o8.mongodb.net/?retryWrites=true&w=majority")

.then(()=>{
    console.log("Mongoose connected")
})
.catch((err)=>{
    console.log(err)
})
const useshema = new mongoose.Schema(({
    first:{
        type:String,
        required:true
    },
    last:{
        type:String,
        required:true
    },
    num:{
        type:Number,
        required:true
    },
    num1:{
        type:Number,
        required:true
    },
    emails:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Address1:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    Region:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    },
    Romia:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },



}))

const data = mongoose.model('data',useshema)

app.post("/application",async(req,res)=>{
   try {
    const newdata = req.body
    console.log(newdata)
    const newfile =data(newdata)
    await newfile.save()
    res.json({
        message:'Mongoose Connected',
        data:newfile
    })
   } catch (err) {
    res.json({
        data:err
    })
    console.log("err")
   }
})

app.listen(PORT,()=>{
    console.log(`Node Js Running ${PORT}`)
})