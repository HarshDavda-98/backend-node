const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type:String,
  },
  message: {
    type:String,
  },
  creator: {
    type:String,
  },
  tags: String,
  selectedFile: String,

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
module.exports=PostMessage;