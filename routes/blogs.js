const express = require("express");
const db = require("../db/config");
const { Op, where } = require("sequelize");
const User = require("../db/models/users");
const bcrypt = require("bcrypt");
const router = express.Router();
const multer = require("multer");
const Profile = require("../db/models/profile");
const BlogsModal = require("../db/models/blogs");

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

//add

router.post("/add", upload.single("image"), async (req, res) => {
  let { userId, title, description, isPublish, category } = req.body;
  const getUser = await User.findOne({
    where: {
      id: userId,
    },
  });

  if (!getUser) {
    res.status(404).json("User Do not match");
  } else {
    const newBlog = await BlogsModal.create({
      userId,
      title,
      description,
      isPublish,
      category,
      image: req.file.filename,
    });
    res.status(201).json(newBlog);
  }
});

//get SingleBlog

router.post("/get", async (req, res) => {
  const { id } = req.body;

  const getSingleBlog = await BlogsModal.findOne({
    where: {
      id,
    },
  });

  const getCurrentUser = await Profile.findOne({
    where: {
      userId: getSingleBlog.userId,
    },
  });

  res.status(200).json({
    id: getSingleBlog.id,
    name: getCurrentUser.name,
    profilePicture: getCurrentUser.image,
    title: getSingleBlog.title,
    description: getSingleBlog.description,
    isPublish: getSingleBlog.isPublish,
    image: getSingleBlog.image,
    category: getSingleBlog.category,
  });
});

//get blogs based on userId

router.post("/getAllBlogs", async (req, res) => {
  try {
    const { userId } = req.body;
    const getAllBlogs = await BlogsModal.findAndCountAll({
      where: {
        userId,
      },
    });
    if (!userId) {
      res.status(401).json("Posts Not Found");
    } else {
      res.status(200).json(getAllBlogs);
    }
  } catch (error) {
    console.log(error);
  }
});

//Get All Blogs

router.get("/allBlogs", async (req, res) => {
  try {
    const allBlogs = await BlogsModal.findAndCountAll();
    res.json(allBlogs);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
