import express from 'express'
import {randomUUID} from 'crypto'
import cors from 'cors'
const app = express()

const comments = []
app.use(express.json())
app.use(cors())

app.post('/addcomment',(req,res)=>{
    const newComment = {
        id:randomUUID(),
        text:req.body.text   
     }
    comments.push(newComment)
    res.json(newComment)
})

app.listen(5000,()=>{
    console.log('api is runnnig')
})