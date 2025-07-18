const mongoose = require('mongoose');


const Connectdb =  async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB Connect Successfully');
    }catch(err){
        console.log("Database Connection is Failed !");
    }
};

module.exports = Connectdb;