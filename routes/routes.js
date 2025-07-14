const {get_page,post_page}=require("../controller/user")
const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
router.get("/",get_page);
router.post("/",upload.single("Profile_Photo"),post_page);
module.exports = router;