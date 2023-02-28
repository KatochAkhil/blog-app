const express = require("express");
const db = require("../db/config");
const ContactModal = require("../db/models/ContactformModal");
const router = express.Router();

//add

router.post("/add", async (req, res) => {
  const { name, email, message } = req.body;
  const createContactForms = await ContactModal.create({
    name,
    email,
    message,
  });
  res.status(201).json(createContactForms);
});

router.post("/faq", async (req, res) => {
  const { name, email, message } = req.body;
  const createContactForms = await ContactModal.create({
    name,
    email,
    message,
  });
  res.status(201).json(createContactForms);
});
module.exports = router;
