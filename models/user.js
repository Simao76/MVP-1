"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      /* required: true, */
      //unique: true,
      trim: true
    },
    email: {
      type: String,
      /* required: true, */
      unique: true,
      lowercase: true,
      trim: true
    },
    googleId: {
      type: String
    },
    googleToken: {
      type: String,
      trim: true
    },
    profilePic: {
      type: String
      //default: "/images/mvp_logo_round.png"
    },
    passwordHash: {
      type: String
      //required: true
    },
    status: {
      type: String,
      enum: ["Pending Confirmation", "Active"],
      default: "Pending Confirmation"
    },
    confirmationCode: {
      type: String,
      unique: true
    },
    _myTeams: [
      {
        // type: mongoose.Types.ObjectId,
        type: String,
        ref: "Team"
      }
    ]
    /*   playersFollowing: {
    type: Number,
    default: 0,
    min: 0
  }, */
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
