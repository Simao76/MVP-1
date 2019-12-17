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
