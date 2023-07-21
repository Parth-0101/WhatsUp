import Message from "../model/messageModel.js"
import Conversation from "../model/conversationModel.js";

export const newMessage = async(req,res) =>{
    try{
        const newMessage = new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
        return res.status(200).json("Message have been send succesfully")
    }catch(err){
        return res.status(500).json("message error")
        console.log(err.message)
    }
}

export const getMessages = async(req,res)=>{
    try{
        const message = await Message.find({conversationId: req.params.id})
        return res.status(200).json(message)
    }catch(err){
        return res.status(500).json(err.message)
    }
}