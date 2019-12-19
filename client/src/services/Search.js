import axios from "axios";

const teamService = axios.create({
  baseURL: "", // tirar http://localhost:3020 para funcionar no heroku
  withCredentials: true
});

const playerService = axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json/1'
});

// Search teams from DB
export const getTeamsfromDB = async name => {
  const lowerCaseName = name.toLowerCase();
  try {
    const response = await teamService.get("/listteams");
     const filterTeam = response.data.teams.filter(el => {  
      if (el.name.toLowerCase().includes(lowerCaseName)) {
        return true;
      }
      return false;
    });
    console.log(filterTeam)
    return filterTeam;
  } catch (error) {
    throw error;
  }
};

export const getPlayer = async data => {
  try {
    let searchFor = data.search
    //console.log(searchFor)    
    const response = await playerService.get(`/searchplayers.php?p=${searchFor}`, searchFor);     
    //console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

/*
export const getTeam = async data => {
  try {
    let searchFor = data.search
    //console.log(searchFor)
    const response = await teamService.get(`${searchFor}`, searchFor);
    console.log(response.data)
    return response.data.teams;
  } catch (error) {
    throw error;
  }
};

*/

/* const teamService = axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json/1'
}); */

// Search teams from API
/* export const getTeam = async data => {
  try {
    let searchFor = data.search
    //console.log(searchFor)    
    const response = await teamService.get(`/searchteams.php?t=${searchFor}`, searchFor); 
    //console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}; */
