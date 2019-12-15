"use strict";

const mongoose = require("mongoose");

const basketballSchema = new mongoose.Schema(
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
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("BasketballLeague", basketballSchema);
