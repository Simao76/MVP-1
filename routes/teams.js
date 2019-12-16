"use strict";

const { Router } = require("express");
const router = new Router();

const Team = require("./../models/teams");
require("../apiServices/load-teams");

router.get("/listteams", (req, res, next) => {
  console.log("BE teams.js list teams");
  Team.find()
    .then(teams => {
      //console.log("leagues.js", leagues)
      res.json({ teams });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
