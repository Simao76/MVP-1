require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const axios = require("axios");

const footballService = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/1"
});

const relevantLeagueIds = [
  //"UEFA Champions League",
  //"UEFA Europa League",
  //"Euroleague Basketball",
  //"EuroCup Basketball",
  //"Basketball Champions League",
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
  "FIBA Basketball World Cup",
  "Formula 1",
  "UFC",
  "WWE",
  "Boxing",
  "ATP World Tour"
];

// Search teams from API
const listAllLeagues = async () => {
  try {
    const response = await footballService.get(`/all_leagues.php`);
    const leagues = response.data.leagues;
    const filteredLeagues = leagues.filter(el =>
      relevantLeagueIds.includes(el.strLeague)
    );
    return filteredLeagues;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const listLeagueDetails = async leagueIds => {
  let leagueDetails = [];
  for (let id of leagueIds) {
    const response = await footballService.get(`/lookupleague.php`, {
      params: { id: id }
    });
    const details = response.data.leagues[0];
    leagueDetails.push(details);
  }
  return leagueDetails;
};

const getTeamsInALeague = async leagueIds => {
  let teamDetails = [];
  for (let id of leagueIds) {
    const response = await footballService.get(
      `/lookup_all_teams.php?id=${id}`
    );
    const details = response.data.teams;
    teamDetails.push(details);
  }
  return teamDetails;
};

const League = require("../models/league");
const Team = require("../models/team");

const loadAllData = async () => {
  const leagues = await listAllLeagues();
  const leagueIds = leagues.map(item => item.idLeague);
  const leagueDetails = await listLeagueDetails(leagueIds);
  const teamsByLeague = await getTeamsInALeague(leagueIds);
  const formatedLeagues = leagueDetails.map(item => {
    return {
      idLeague: item.idLeague,
      name: item.strLeague,
      description: item.strDescriptionEN,
      badge: item.strBadge,
      sport: item.strSport
    };
  });

  let newArr = [];
  const formatedTeams = teamsByLeague.forEach(el =>
    el.map(item =>
      newArr.push({
        _id: item.idTeam,
        idLeague: item.idLeague,
        name: item.strTeam,
        alternateName: item.strAlternate,
        idTeam: item.idTeam,
        intFormedYear: item.intFormedYear,
        sport: item.strSport,
        description: item.strDescriptionEN,
        league: item.strLeague,
        stadium: item.strStadium,
        stadiumDescription: item.strStadiumDescription,
        stadiumLocation: item.strStadiumLocation,
        badge: item.strTeamBadge,
        jersey: item.strTeamJersey,
        banner: item.strTeamBanner,
        website: item.strWebsite,
        followersCount: 0
      })
    )
  );
  //console.log("formated teams", newArr)
  await League.deleteMany({});
  const leagueDocuments = await League.create(formatedLeagues);
  await Team.deleteMany({});
  const teamDocuments = await Team.create(newArr);
  //console.log(leagueDocuments);
  //console.log(teamDocuments);
  console.log("data loaded");
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
    await loadAllData();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports.populateDB = populateDB;
