const mongoose = require('mongoose');

const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'notebook';


const ConnectToMongo = async()=>{
    try{
        await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, dbName });
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log(error)
    }
}


// const ConnectToMongo = async()=>{
//     try{
//         await mongoose.connect("mongodb://localhost:27017/notebook")
//         console.log('Connected to MongoDB');
//     }
//     catch(error){
//         console.log(error);
//         }
// }

module.exports = ConnectToMongo