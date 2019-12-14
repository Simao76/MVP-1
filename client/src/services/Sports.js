import axios from "axios";

// const footballService = axios.create({
//   baseURL: "https://www.thesportsdb.com/api/v1/json/1"
// });

// Search teams from API
// export const getFootball = async () => {
//   try {
//     //console.log(searchFor)
//     const response = await axios.get(
//       `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
//     );
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

const apiService = axios.create({
  baseURL: "http://localhost:3020",
  withCredentials: true
});

export const getFootball = async () => {
  try {
    //console.log("get football")
    const response = await apiService.get("/listleagues");
    //console.log("get football - response", response.data.leagues)
    return response.data.leagues;
  } catch (error) {
    throw error;
  }
};

export const getBasketball = async () => {
  try {
    console.log("get basketball")
    const response = await apiService.get("/listbasketballleagues");
    //console.log("get basketball - response", response.data.leagues)
    return response.data.leagues;
  } catch (error) {
    throw error;
  }
};
