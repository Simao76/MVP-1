import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:3020",
  withCredentials: true
});

export const getSport = async sport => {
  try {
    const response = await apiService.get("/listleagues");
    const filterSport = response.data.leagues.filter(el => {
      if (el.sport === sport) {
        return true;
      }
      return false;
    });
    return filterSport;
  } catch (error) {
    throw error;
  }
};

export const getTeams = async id => {
  try {
    const response = await apiService.get("/listteams");
    const filterLeague = response.data.teams.filter(el => {
      if (el.idLeague === id) {
        return true;
      }
      return false;
    });
    //console.log(filterLeague);
    return filterLeague;
  } catch (error) {
    throw error;
  }
};

export const getOneTeam = async id => {
  try {
    const response = await apiService.get("/listteams");
    const filterTeam = response.data.teams.filter(el => {
      if (el.idTeam === id) {
        return true;
      }
      return false;
    });
    //console.log(filterTeam)
    return filterTeam;
  } catch (error) {
    throw error;
  }
};

/* export const getTeamsInALeague = async league => {
  try {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${league}`
    );
    //console.log(response.data.teams)
    return response.data.teams;
  } catch (error) {
    throw error;
  }
}; */

export const getEvents = async id => {
  try {
    let response = [];
    const responseLast = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${id}`
    );
    response.push(responseLast.data.events);
    const responseNext = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${id}`
    );
    response.push(responseNext.data.events);
    //console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getEventsByTeamId = async id => {
  console.log(id);

  try {
    let response = [];
    const responseNext = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${id}`
    );
    //console.log(responseNext.data.events);
    response.push(responseNext.data.events);

    const responseLast = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`
    );
    response.push(responseLast.data.results);
    /*   console.log(responseLast.data.results); */

    return response;
  } catch (error) {
    throw error;
  }
};
