const mongoose = require('mongoose');

const DB = process.env.DATABASE
 mongoose
   .connect(DB, { useNewUrlParser: true })
   .then(() => console.log("Connection Start"))
   .catch((err) => console.log(err.message));