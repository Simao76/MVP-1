import axios from "axios";

const UserService = axios.create({
  baseURL: "http://localhost:3020/user"
});

export const addfollower = async (teamId, userId) => {
  try {
    await UserService.patch(`/follow/${teamId}`, userId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
