"use strict";

const { Router } = require("express");
const router = new Router();
const League = require("./../models/league");

router.get("/listleagues", (req, res, next) => {
  League.find()
    .then(leagues => {
      res.json({ leagues });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
