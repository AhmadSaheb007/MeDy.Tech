const mongoose = require('mongoose')


const DB = 'mongodb://localhost:27017/medytech';

mongoose.connect(DB).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) =>{
    console.error("Could not connect to DB))", err);
});