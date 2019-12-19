import axios from "axios";

const teamService = axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json/1'
});

// Search teams from API
export const getTeam = async data => {
  try {
    let searchFor = data.search
    //console.log(searchFor)    
    const response = await teamService.get(`/searchteams.php?t=${searchFor}`, searchFor); 
    //console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPlayer = async data => {
  try {
    let searchFor = data.search
    //console.log(searchFor)    
    const response = await teamService.get(`/searchplayers.php?p=${searchFor}`, searchFor);     
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
