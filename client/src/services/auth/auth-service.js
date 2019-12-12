import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:3020/api",
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password) => {
    return this.service
      .post("/signup", { username, password })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then(response => response.data);
  };
}

export default AuthService;
