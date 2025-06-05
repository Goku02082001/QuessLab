import mongoose from "mongoose";

const Form= new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    ProfilePhoto:{
        type:String,
        required:true
    },
    LinkedInProfile:{
        type:String,
        required:true
    },
    Twitter:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        enum:["Employee","Manager","Ceo"],
        default:"Employee",
        required:true
    }

})

const formSchema =new mongoose.model('FormData',Form)

export default formSchema