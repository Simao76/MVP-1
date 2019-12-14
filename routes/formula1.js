"use strict";

const { Router } = require("express");
const router = new Router();
const Formula = require("../models/formula1");
//require("../apiServices/load-leagues");

router.get("/listformula", (req, res, next) => {
  //console.log('BE leagues.js list leagues')
  Formula.find()
    .then(leagues => {
      //console.log(leagues)
      res.json({ leagues });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
