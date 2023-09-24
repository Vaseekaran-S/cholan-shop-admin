
import mongoose from "mongoose";

async function connectMongo(){
    try{
        await mongoose.connect(<string>process.env.MONGODB_URL,<Object>{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Success : MongoDb Connected");
    }catch(err){
        console.log("Error : MongoDb Not Connected");
    }
}

export default connectMongo;