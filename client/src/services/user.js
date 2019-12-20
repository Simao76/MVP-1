import axios from "axios";

const UserService = axios.create({
  baseURL: ""
});

export const addfollower = async (teamId, userId) => {
  //console.log(teamId, userId);
  try {
    await UserService.patch(`/follow/${teamId}/${userId}` /* , userId */);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const removeFollower = async (teamId, userId) => {
  //console.log(teamId, userId);
  try {
    await UserService.patch(`/unfollow/${teamId}/${userId}` /* , userId */);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserFollow = async teamId => {
  //console.log(teamId);
  try {
    const response = await UserService.get(`/teams/${teamId}` /* , userId */);
    return response.data.getTeams;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const editProfile = async (id, user) => {
  const userUpdate = user.updateUser;
  try {
    const response = await UserService.patch(`/edit/${id}`, userUpdate);
    //console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const uploadImage = async image => {
  const data = new FormData();

  data.append("profilePic", image);
  try {
    const response = await UserService.post(`/upload/profileImage`, data);
    console.log("this below is response file");
    console.dir(response.data.joinLink);
    return response.data.joinLink;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
