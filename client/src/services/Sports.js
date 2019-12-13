import axios from "axios";

const footballService = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/1"
});

// Search teams from API
export const getFootball = async () => {
  try {
    //console.log(searchFor)
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
