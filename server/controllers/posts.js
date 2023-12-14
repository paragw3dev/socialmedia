import PostMessage from "../models/postMessages.js"

export const getPosts =async(req,res)=>{
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)     
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost =async(req,res)=>{
    const post = req.body;

    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const updatePost =(req,res)=>{   
    console.log(`Updating post with id: ${req.params.id}`);
    // code to update the post here
    res.send(`Post with id ${req.params.id} has been updated`);
    }

