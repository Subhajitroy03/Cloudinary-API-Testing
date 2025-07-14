// middleware/multer.js
const multer = require("multer");
const storage = multer.memoryStorage(); // use memory for direct Cloudinary upload
const upload = multer({ storage });

module.exports = upload;