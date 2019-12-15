"use strict";

const mongoose = require("mongoose");

const formula1Schema = new mongoose.Schema(
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

module.exports = mongoose.model("Formula1", formula1Schema);
