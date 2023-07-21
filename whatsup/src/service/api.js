import axios from 'axios'

const url = "http://localhost:8000";

export const addUser = async(data)=>{
    try{
        await axios.post(`${url}/add`,data);
    }catch(error){
        console.log("Error while addUser API ",error)
    }
}
export const getUsers = async()=>{
    try{
        let response = await axios.get(`${url}/users`)
        console.log(response.data)
        return response.data;
    }catch(err){
        console.log('Error while getusers api ',err.message)
    }
}

export const setConversation = async(data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data)
    }catch(err){
        console.log("Error while calling ",err.message)
    }
}
export const getConversation = async(data)=>{
    try{
       let response =  await axios.post(`${url}/conversation/get`,data)
       return response.data
    }catch(err){
        console.log("Error while calling from getConversation",err.message)
    }
}

export const newMessages = async(data)=>{
    try{
        await axios.post(`${url}/message/add`,data)
    }catch(err){
        console.log("error while calling newmessage api",err.message)
    }
}

export const getMessages = async(id)=>{
    try{
        let response = await axios.get(`${url}/message/get/${id}`)
        return response.data;
    }catch(err){
        console.log("error while calling getMessage API",err.message)
    }
}

export const uploadFile = async(data)=>{
    try{
        return await axios.post(`${url}/file/upload`);
    }catch(err){
        console.log("Error in uplaod fiel")
    }
}