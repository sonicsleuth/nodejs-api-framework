const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Add a User
// POST localhost:3000/user/data/ (with json data in body)
router.post("/data", async (req, res) => {
  const user = new User({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Return ALL Users
// GET localhost:3000/user/
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// Return specific User by Record ID
// GET localhost:3000/user/00000000000000
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete specific User by Record ID
// DELETE localhost:3000/user/00000000000000
router.delete("/:id", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.id });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a specific User by Record ID
// PATCH localhost:3000/user/00000000000000 (with json data in body)
router.patch("/:id", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
