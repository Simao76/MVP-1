"use strict";

const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema(
  {
    idLeague: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    sport: {
      type: String
    },
    badge: {
      type: String
    },
    teams: {}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("League", leagueSchema);
