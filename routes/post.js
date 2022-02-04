const express = require("express")
const PostMessage = require("../controller/Modals/postmessage")
const {getpost,getmessage} = require("../controller/post")
const multer  = require('multer')
const poster= express.Router();

poster.get("/",getpost );
poster.get("/",getmessage );
poster.post("/dl", (req,res) => {
    // res.send(req.body)
    const posters = new PostMessage({
        title: req.body.title,
        message: req.body.message,
        creator:req.body.creator,
        tags:req.body.tags,
        selectedFile:req.body.selectedFile,
        // : req.body.sub
    })

    try{
        res.send('success')
        const a1 =   posters.save() 
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})
// poster.save("/dl");

poster.get("/dl")
  
module.exports = poster;