var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/original-files/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
});

function fileFilter (req, file, cb) {
  if (file.mimetype === 'application/pdf')
    cb(null, true)
  else
    cb(null, false)
}

module.exports = multer({ storage: storage, fileFilter: fileFilter });