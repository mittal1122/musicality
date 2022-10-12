const mongoose =require("mongoose")

let SongSchema = new mongoose.Schema({
   
   
    playlist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"playlist"
    },
    song:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"songs"
    }
})

let SubcategoryModel = mongoose.model("playlistSongs",SongSchema)
module.exports = SubcategoryModel