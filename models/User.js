const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email field is required"],
        unique:true,
        
    },
    name:{
        type:String,
        required:[true,"Name field is required"]
    },
    department:{
        type:String,
        required:[true,"Password field is required"]

    },
    subject:{
        type:Array,
        default:[]
    },
    age:{
        type:Number,
        required:true
    },
    roles:{
        type:String,
        required:true,
        default:"Student"

}

})

const User = mongoose.model('User',userSchema)
module.exports = User