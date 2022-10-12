const mongoose =require("mongoose");

//schema

let PlayListSchema =new mongoose.Schema({
    listName:{
        type:String,
        require:true
    }
})

//model

let CategoryModel = mongoose.model("playlist",PlayListSchema) 

module.exports = CategoryModel