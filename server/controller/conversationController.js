import Conversation from "../model/conversationModel.js"

export const newConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;

        const exist = await Conversation.findOne({members:{$all:[recieverId,senderId]}})

        if(exist){
            return res.status(200).json('conversation already exist')
        }
        const newConversation = new Conversation({
            members:[senderId,recieverId]
        })
        await newConversation.save();
        return res.status(200).json("new conversation is saved")
    } catch (err) {
        return response.status(500).json(err.message);
        console.log("Error from conversation", err.message)
    }
}

export const getConversation = async(req,res)=>{
    try{
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        let conversation = await Conversation.findOne({members:{$all :[receiverId,senderId]}})
        return res.status(200).json(conversation)
    }catch(err){
        return res.status(500).json("Error getting conversation",err.message)
    }
}