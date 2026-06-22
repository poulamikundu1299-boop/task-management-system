const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        name :{
            type : String,
            required : true,
            // for a valid user data
            trim : true,
            minlength : 3,
        },
        userId :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        status : {
            type : String,
            enum : ["pending","completed"],
            default : "pending"
        },
        dueDate : {
            type : Date
        }
    },
    {
        versionKey : false,
        timestamps: true
    }
);

module.exports = mongoose.model("task",taskSchema,"taskss");