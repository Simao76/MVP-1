"use strict";

const { Router } = require("express");
const router = new Router();

const Team = require("../models/team");
//require("../apiServices/load-teams");

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

router.get('/teams/:teamId' , async (req, res, next) => {  
  const teamId = req.params.teamId;
  console.log(teamId)
 
  try {
    const getTeam = await Team.findById(teamId).exec();
    res.json({ message: 'Fetched team ', getTeam});
   }catch (err) {
    next(err);
  }
})

module.exports = router;
