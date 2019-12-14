"use strict";

const { Router } = require("express");
const router = new Router();
const basketBallLeague = require("../models/basketballLeague");
//require("../apiServices/load-basketballLeagues");

router.get("/listbasketballleagues", (req, res, next) => {
  //console.log('BE basketball.js list leagues')
  basketBallLeague.find()
    .then(leagues => {
      //console.log(leagues)
      res.json({ leagues });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;