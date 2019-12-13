import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:3020",
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, email, password) => {
    return this.service
      .post("/sign-up", { username, email, password })
      .then(response => response.data);
  };

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
  };
}

export default AuthService;
