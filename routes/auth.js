const express = require("express");
const db = require("../db/config");
const { Op, where } = require("sequelize");
const User = require("../db/models/users");
const bcrypt = require("bcrypt");
const router = express.Router();

// sign up

router.post("/register", async (req, res) => {
  let { email, password } = req.body;
  const checkUser = await User.findOne({
    where: { email },
  });
  if (checkUser) {
    return res.status(400).json("User Already Exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const createUser = await User.create({
      email,
      password,
    });
    return res
      .status(201)
      .json({ msg: "user Created Successfully", data: createUser });
  }
});

// Login

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log("first");
    const checkUser = await User.findOne({
      where: {
        email,
        password: { [Op.ne]: null },
      },
    });
    if (!checkUser) {
      res.status(404).json("User not Found");
    } else {
      const valid = await bcrypt.compare(password, checkUser.password);
      if (!valid) {
        res.status(404).json("Email/Password do not match");
      } else {
        res.status(200).json({
          id: checkUser.id,
          name: checkUser.name,
          email: checkUser.email,
          image: checkUser.image,
          number: checkUser.number,
          profession: checkUser.profession,
          interest: checkUser.interest,
          bio: checkUser.bio,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// Get user

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getUser = await User.findOne({
    where: {
      id: id,
    },
  });
  if (!getUser) {
    res.status(404).json("user Not found");
  } else {
    res.status(200).json({
      id: getUser.id,
      name: getUser.name,
      email: getUser.email,
      number: getUser.number,
      image: getUser.image,
      profession: getUser.profession,
      bio: getUser.bio,
      interest: getUser.interest,
    });
  }
});

module.exports = router;
