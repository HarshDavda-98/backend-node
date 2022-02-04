const express = require("express")
const  bodyParser =require("body-parser");
const  mongoose =require( "mongoose");
const  cors =require("cors");
const app = express();
const poster =require("./routes/post")

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));  
app.use(cors());
app.use('/posts',require("./routes/post")); 
app.use ('/uploads',express.static('uploads'))
const CONNECTION_URL ="mongodb+srv://Nodejstutorial:Nodejstutorial123@cluster0.0y601.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5020;

mongoose
.connect(CONNECTION_URL).then(()=>{console.log('...')})
  .then(() =>
    app.listen(PORT, () => console.log(`server runnunig on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));


// app.get("/",(req,res)=>{
//     res.send("Heyyy")
// })