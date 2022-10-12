const mongoose =require("mongoose")

let SongSchema = new mongoose.Schema({
   
    title:{
        type:String
    },
    movieName:{
        type:String
    },
    yearOfRelease:{
        type:String
    },
    url:{
        type:String
    },
    singers:{
        type:String
    },
    playlist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"playlist"
    }
})

let SubcategoryModel = mongoose.model("songs",SongSchema)
module.exports = SubcategoryModel