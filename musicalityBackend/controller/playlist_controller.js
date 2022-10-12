const playlistModel = require("../model/playlist_model");

module.exports.addPlayList = function (req, res) {

  let playlist = new playlistModel({
    listName: req.body.listName,
  });

  playlist.save(function (err, success) {
    if (err) {
      res.json({ msg: "SMW", status: -1, data: req.body });
    } else {
      res.json({ msg: "category added", status: 200, data: success });
    }
  });
};

// get by id

module.exports.getById = function (req, res) {
  let id = req.params.playlistId;

  playlistModel.findById({ _id: id }, function (err, data) {
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "Playlist...", status: 200, data: data });
    }
  });
};

//List
module.exports.getAllLists = function (req, res) {
  //REST
  playlistModel.find(function (err, list) {
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "Playlist...", status: 200, data: list });
    }
  });
};

//delete
module.exports.deleteList = function (req, res) {
  let playlistId = req.params.playlistId;
console.log(playlistId);
  playlistModel.remove({ _id: playlistId }, function (err, data) {
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      console.log(err);
    } else {
      res.json({ msg: "removed...", status: 200, data: data });
      console.log(data);
    }
  });
};

//update
module.exports.updatePlaylist = function (req, res) {
  let playlistId = req.params.playlistId;
  let listName = req.body.listName;

  playlistModel.updateOne(
    { _id: playlistId },
    { listName: listName },
    function (err, data) {
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "updated...", status: 200, data: data });
      }
    }
  );
};
