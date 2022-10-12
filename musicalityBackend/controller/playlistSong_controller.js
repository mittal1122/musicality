const PlaylistSongModel = require("../model/playlistSong_model")

//add
module.exports.addSong = function (req, res) {


    let song = new PlaylistSongModel({
        song: req.body.song,
        playlist: req.body.playlist
    })

    song.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "song add...", data: data, status: 200 })
        }
    })
}

// get by id
module.exports.getById = function (req, res) {
    let id = req.params.songId;
    SongModel.findById({ _id: id }).populate('playlist').populate('songs').exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "Songs...", status: 200, data: data });
        }
    })
}

//List
module.exports.getAllSongs = function (req, res) {
    //REST
    SongModel.find().populate('playlist').populate('songs').exec(function (err, list) {
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "songList...", status: 200, data: list });
      }
    });
  };

// get by playlist id

module.exports.getByplaylistId = function (req, res) {

    let id = req.params.playlistId;
    console.log(id)

    SongModel.find({ playlist: id }).populate('playlist').populate('songs').exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "songs by playlist", status: 200, data: data });
        }
    })
}

//delete
module.exports.deleteSong = function (req, res) {
 
    let songId = req.params.songId 

    SongModel.deleteOne({ _id: songId }, function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "song removed...", data: data, status: 200 }) 
        }
    })
}

//update 

module.exports.updateSong = function (req, res) {

    let songId = req.params.songId

    SongModel.updateOne({ _id: songId }, {  title: req.body.title,
        movieName: req.body.movieName,
        yearOfRelease: req.body.yearOfRelease,
        url: req.body.url,
        singers: req.body.singers,
        playlist: req.body.playlist}, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })
}
