import express from 'express'
import dotenv from 'dotenv'
import connectDb from './db/db.js'
import PostForm from './routes/FormRoutes.js'
import GetForm from './routes/FormDataRoutes.js'
dotenv.config()
const app=express()
app.use(express.json())
const PORT=process.env.PORT
app.get('/',(req,res)=>{
    res.send("Here is my data")
})

app.use('/api',PostForm)

app.use('/api',GetForm)

app.listen(PORT,()=>{
    connectDb()
    console.log(`Your server is connected ${PORT}`)
})


