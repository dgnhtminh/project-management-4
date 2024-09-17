"use strict";

var multer = require('multer');

module.exports = function () {
  var storage = multer.diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, './public/uploads');
    },
    filename: function filename(req, file, cb) {
      var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, "".concat(uniqueSuffix, "-").concat(file.originalname));
    }
  });
  return storage;
};