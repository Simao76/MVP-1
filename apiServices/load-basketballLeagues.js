require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const axios = require("axios");

const basketballService = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/1"
});

const relevantLeagueIds = [
  "NBA",
  "WNBA",
  "Spanish Liga ACB",
  //"Italian Lega Basket",
  //"British Basketball League",
  //"Greek Basket League",
  //"German BBL",
  //"Euroleague Basketball",
  //"EuroCup Basketball",
  //"Basketball Champions League",
  //"FIBA Basketball World Cup"
];

// Search teams from API
const listAllLeagues = async () => {
  try {
    const response = await basketballService.get(`/all_leagues.php`);
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
    const response = await basketballService.get(`/lookupleague.php`, {
      params: { id: id }
    });
    const details = response.data.leagues[0];
    leagueDetails.push(details);
  }
  return leagueDetails;
};

const League = require("../models/basketballLeague");

const loadAllData = async () => {
  const leagues = await listAllLeagues();
  const leagueIds = leagues.map(item => item.idLeague);
  const leagueDetails = await listLeagueDetails(leagueIds);
  const formatedLeagues = leagueDetails.map(item => {
    return {
      idLeague: item.idLeague,
      name: item.strLeague,
      description: item.strDescriptionEN,
      badge: item.strBadge,
      sport: item.strSport
    };
  });
  const leagueDocuments = await League.create(formatedLeagues);
  console.log(leagueDocuments);
};

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
