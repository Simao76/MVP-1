"use strict";

const { Router } = require("express");
const router = new Router();
const User = require("../models/user");

router.patch("/follow/:teamId/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  const teamId = req.params.teamId;
  try {
    const updateduser = await User.findByIdAndUpdate(userId, {
      $push: { _myTeams: teamId }
    }).exec();
    res.json({ message: "Updates Successfully ", updateduser });
  } catch (err) {
    next(err);
  }
});

router.patch("/unfollow/:teamId/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  const teamId = req.params.teamId;
  try {
    const updateduser = await User.findByIdAndUpdate(userId, {
      $pull: { _myTeams: teamId }
    }).exec();
    res.json({ message: "Delete Successful ", updateduser });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
