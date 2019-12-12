import axios from "axios";


const teamService = axios.create({
  baseURL: '/'
});

export const getTeam = async data => {
  try {
    //console.log(data.search)
    
    const response = await teamService.get(``, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};


/* export const getTeam = async data => {
  try {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Benfica`);
    return response.data;
  } catch (error) {
    console.log('There was an error in getting the team from the DB');
    throw error;
  }
};
 */
