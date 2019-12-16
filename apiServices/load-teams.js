require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const axios = require("axios");

const footballService = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/1"
});

//

const getTeamsInALeague = async () => {
  try {
    const response = await footballService.get(`/lookup_all_teams.php?id=4356`);
    const teams = response.data.teams;
    console.log("get all teams", response.data);
    return response.data.teams;
  } catch (error) {
    throw error;
  }
};

const Team = require("../models/teams");

const loadAllData = async () => {
  const teams = await getTeamsInALeague();

  const formatedTeams = teams.map(item => {
    return {
      idTeam: item.idTeam,
      name: item.strTeam,
      league: item.strLeague,
      stadium: item.strStadium,
      description: item.strDescriptionEN,
      badge: item.strBadge,
      Manager: item.strManager
    };
  });
  await Team.deleteMany({});
  const teamDocuments = await Team.create(formatedTeams);
  console.log(teamDocuments);
};

/* (async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    await loadAllData();
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    process.exit(0);    
  } 
})(); 
 */

const populateDB = async () => {
  try {
    await getTeamsInALeague();
    /* await loadAllData(); */
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports.populateDB = populateDB;
