require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const axios = require("axios");

const relevantLeagueIds = [
  "UEFA Champions League",
  "UEFA Europa League",
  "English Premier League",
  "German Bundesliga",
  "Italian Serie A",
  "French Ligue 1",
  "Spanish La Liga",
  "Portuguese Primeira Liga",
  "Brazilian Brasileirao",
  "Argentinian Primera Division",
  "NBA",
  "WNBA",
  "Spanish Liga ACB",
  "Italian Lega Basket",
  "British Basketball League",
  "Greek Basket League",
  "German BBL",
  "Euroleague Basketball",
  "EuroCup Basketball",
  "Basketball Champions League",
  "FIBA Basketball World Cup",
  "Formula 1",
  "UFC",
  "WWE",
  "Boxing",
  "ATP World Tour"
];

const footballService = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/1"
});

/* const getTeamsInALeague = async () => {  
    const response =  relevantLeagueIds.map(item => {
      footballService.get(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${item}`);
    })
    //const response = await footballService.get(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English Premier League`);
    //const teams = response.data.teams;
    //console.log("get all teams", response.data);
    return response.data;
};

const loadAllData = async () => {
  const leagueNames = relevantLeagueIds.map(item => item);
  const teamDetails = await getTeamsInALeague(); 
  console.log("load all data", teamDetails);
};
 */
/* 
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
/* 
(async () => {
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
    //await getTeamsInALeague();
    //await loadAllData();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports.populateDB = populateDB;
