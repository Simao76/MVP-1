import axios from "axios";


const teamService = axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t='
});

export const getTeam = async data => {
  try {
    let searchFor = data.search
    console.log(searchFor)
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchFor}`, searchFor);
    console.log(response.data)
    return response.data;
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
