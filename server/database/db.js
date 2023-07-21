import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const Connection = async() =>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-ynjfy2r-shard-00-00.ng6gvob.mongodb.net:27017,ac-ynjfy2r-shard-00-01.ng6gvob.mongodb.net:27017,ac-ynjfy2r-shard-00-02.ng6gvob.mongodb.net:27017/?ssl=true&replicaSet=atlas-i87i4h-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true})
        console.log("Database connected succesfully")
    }catch(error){
        console.log("error from db.js mongo",error.message)
    }
}

export default Connection;