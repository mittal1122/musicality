const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const playlistController = require("./controller/playlist_controller");
const songController = require("./controller/song_controller");

const app = express();
const router = express.Router();

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//database
mongoose.connect(
    "mongodb://localhost:27017/musicality",
    function (err) {
        if (err) {
            console.log("db connection fail...");
            console.log(err);
        } else {
            console.log("db connected...");
        }
    }
);

//playlist
app.post("/playlist/add", playlistController.addPlayList);
app.get("/playlists", playlistController.getAllLists);
app.get("/playlist/:playlistId", playlistController.getById);
app.delete("/playlist/:playlistId", playlistController.deleteList);
app.put("/playlist/:playlistId", playlistController.updatePlaylist);


//song
app.post("/song/add", songController.addSong);
app.get("/song/:songId", songController.getById);
app.get("/songsbyplaylist/:playlistId", songController.getByplaylistId);
app.get("/songs", songController.getAllSongs);
app.delete(
    "/song/:songId",
    songController.deleteSong
);
app.put("/song/:songId", songController.updateSong);

//playlistSongs
//song
app.post("/playlistsong/add", songController.addSong);
app.get("/playlistsong/:songId", songController.getById);
// app.get("/songsbyplaylist/:playlistId", songController.getByplaylistId);
app.get("/playlistsongs", songController.getAllSongs);
app.delete(
    "/playlistsong/:songId",
    songController.deleteSong
);
app.put("/playlistsong/:songId", songController.updateSong);


app.listen(4000, function () {
    console.log("server started on 4000");
});