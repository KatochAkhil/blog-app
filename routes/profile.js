const express = require("express");
const db = require("../db/config");
const { Op, where } = require("sequelize");
const User = require("../db/models/users");
const bcrypt = require("bcrypt");
const router = express.Router();
const multer = require("multer");
const Profile = require("../db/models/profile");
// image storage

const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

// filter

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(null, Error("Only Image is Allowed"));
  }
};

let upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});

router.post("/add", upload.single("image"), async (req, res) => {
  let { userId, name, number, profession, interest, bio } = req.body;

  const getUser = await User.findOne({
    where: {
      id: userId,
    },
  });

  if (!getUser) {
    res.status(404).json("User Do not match");
  } else {
    const checkProfile = await Profile.findOne({
      where: {
        userId: userId,
      },
    });
    if (checkProfile) {
      res.status(401).json("Details Already Exists");
    } else {
      const userProfile = await Profile.create({
        userId,
        name,
        number,
        profession,
        interest,
        bio,
        image: req.file.filename,
      });
      res.status(201).json(userProfile);
    }
  }
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const getUserProfile = await Profile.findOne({
    where: {
      userId,
    },
  });

  if (!userId) {
    res.status(404).json("Profile Not Found");
  } else {
    res.status(200).json(getUserProfile);
  }
});

module.exports = router;
