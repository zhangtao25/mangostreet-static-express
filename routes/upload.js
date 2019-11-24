const multer = require('multer');
var express = require('express');
var router = express.Router();


var noteStorage = multer.diskStorage({
  destination: './public/note',
  filename: function(req, file, cb) {
    let extName = file.originalname;
    cb(null, extName)
  }
});
var userStorage = multer.diskStorage({
  destination: './public/user',
  filename: function(req, file, cb) {
    let extName = file.originalname;
    cb(null, extName)
  }
});
var noteUpload = multer({
  storage: noteStorage
});
var userUpload = multer({
  storage: userStorage
});

router.post('/note', noteUpload.single('note'), function (req, res, next) {
  let file = req.file;
  console.log(file);
  res.json({message: "ok"});
});

router.post('/user', userUpload.single('user'), function (req, res, next) {
  let file = req.file;
  console.log(file);
  res.json({message: "ok"});
});

module.exports = router;
