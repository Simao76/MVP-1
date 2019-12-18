"use strict";

const { Router } = require("express");
const router = new Router();
const User = require("../models/user");

router.patch("/follow/:teamId", async (req, res, next) => {
  const teamId = req.params.teamId;
  const userId = req.user;
  console.log(req.session, req.user, teamId, userId);
  //const userId = req.body.userId;
  //const userId = req.user;

  try {
    console.log("user", userId);
    const updateduser = await User.findByIdAndUpdate(userId, {
      $push: { _myTeams: teamId }
    }).exec();
    res.json({ message: "Updates Successfully ", updateduser });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
