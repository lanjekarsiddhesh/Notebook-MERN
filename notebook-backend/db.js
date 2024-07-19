const mongoose = require('mongoose');

const ConnectToMongo = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/notebook")
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log(error);
        }
}

module.exports = ConnectToMongo