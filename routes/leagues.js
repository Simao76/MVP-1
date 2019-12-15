"use strict";

const { Router } = require("express");
const router = new Router();
const League = require("./../models/league");
//require("../apiServices/load-leagues");



router.get("/listleagues", (req, res, next) => {
  //console.log('BE leagues.js list leagues')
  League.find()
    .then(leagues => {
      //console.log("leagues.js", leagues)
      res.json({ leagues });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
