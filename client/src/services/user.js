import axios from "axios";

const UserService = axios.create({
  baseURL: "http://localhost:3020"
});

export const addfollower = async (teamId, userId) => {
  console.log(teamId, userId)
  try {
    await UserService.patch(`/follow/${teamId}/${userId}`/* , userId */);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const removeFollower = async (teamId, userId) => {
  console.log(teamId, userId)
  try {
    await UserService.patch(`/unfollow/${teamId}/${userId}`/* , userId */);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserFollow = async teamId => {
  console.log(teamId)
  //let teams = []
  try {
    const response = await UserService.get(`/teams/${teamId}`/* , userId */);
    //teams.push(response.data.getTeam)
    console.log(response.data.getTeams)
    return response.data.getTeams
  } catch (error) {
    console.log(error);
    throw error;
  }
};


