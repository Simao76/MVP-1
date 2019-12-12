import axios from "axios";

export const getTeam = async function(name) {
  try {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Benfica`);
    return response.data;
  } catch (error) {
    console.log('There was an error in async sports load service');
    throw error;
  }
};