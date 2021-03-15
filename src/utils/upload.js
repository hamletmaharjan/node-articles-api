const multer = require('multer');

const imageFilter = require('../validators/imageValidator');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
        let fileName = file.originalname;
        let splitted = fileName.split('.');

      cb(null, file.fieldname + '-' + Date.now() + '.' + splitted[splitted.length-1]);
    }
  })
   
const upload = multer({ storage: storage, fileFilter: imageFilter });

module.exports = upload;