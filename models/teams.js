'use strict';

const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  alternateName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  idTeam: { //from TheSportsDB
    type: Number,
    required: true,
  },
  intFormedYear: {
    type: Number,    
  },
  sport: {
    type: String,
  },
  league: {
    type: String,
  },
  idLeague: {
    type: Number,    
  },
  manager: {
    type: String,
  },
  stadium: {
    type: String,
  },
  stadiumDescription: {
    type: String,
  },
  followersCount: {
    type: Number,
    default: 0,
    min: 0
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('team', teamSchema);
