import express from 'express';
import Connection from './database/db.js';
import Route from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';


const app = express();
app.use(cors());// cross origin  something to do with browser doesn't let data sharing between different ports
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Route)

Connection();
app.listen(8000,()=>{
    console.log("Server is running ...")
})

