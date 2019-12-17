import axios from "axios";

/* class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:3020",
      withCredentials: true
    });
    this.service = service;
  } */

const AuthenticationService = axios.create({
  baseURL: ''
});

/*   signup = (username, email, password) => {
    return this.service
      .post("/sign-up", { username, email, password })
      .then(response => response.data);
  }; */

export const signUp = async data => {
  try {
    const response = await AuthenticationService.post(`/sign-up`, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async data => {
  try {
    const response = await AuthenticationService.post(`/sign-in`, data);
    console.log(response)
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await AuthenticationService.post(`/sign-out`);
  } catch (error) {
    throw error;
  }
};

export const loadUserInformation = async () => {
  try {
    const response = await AuthenticationService.get(`/user-information`);
    //console.log(response.data.user)
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

/* 
  loggedin = () => {
    return this.service.get("/loggedin").then(response => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/sign-in", { username, password })
      .then(response => response.data);
  };

  logout = () => {
    return this.service.post("/logout", {}).then(response => response.data);
  }; */
//}

//export default AuthService;
