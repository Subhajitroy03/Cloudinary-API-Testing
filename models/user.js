const mongoose = require("mongoose");
const userschema = new mongoose.Schema(
  {
    Profile_Photo: {
      type: String, 
      required: true
    },
  },
  { timestamps: true }
);

const Users = mongoose.model('cloudinary_test', userschema);
module.exports = Users;
