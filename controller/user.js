const User = require("../models/user");
const cloudinary = require("../middlewares/cloudinary");
const streamifier = require("streamifier");
async function get_page(req, res) {
  res.render("index")
}
async function post_page(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: "Profile photo is required" });
    }
    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "users",
            fetch_format: "auto",
            quality: "auto",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const uploadResult = await streamUpload();
  
    const newUser = await User.create({
      Profile_Photo: uploadResult.secure_url,
    });
    res.render("index",{url:uploadResult.secure_url})
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({
      msg: "Server error. Please try again.",
      error: err.message,
    });
  }
}
module.exports = {
  get_page,
  post_page,
};
