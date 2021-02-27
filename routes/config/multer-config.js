var multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'original-files/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
});

function fileFilter (req, file, cb) {
  if (file.mimetype === 'application/pdf')
    cb(null, true)
  else
    cb(null, false)
}

module.exports = multer({ storage, fileFilter });