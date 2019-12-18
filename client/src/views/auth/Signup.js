import React, { Component } from "react";
import { signUp as signUpService } from '../../services/auth/auth-service';
import { Link, withRouter } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "", 
      email: "", 
      password: "" 
    };   
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  async formSubmitHandler(e) {    
    e.preventDefault();
    const { username, email, password } = this.state;
    try {
      const user = await signUpService({ username, email, password });
      this.props.changeAuthenticationStatus(user);
      this.props.history.push(`/profile/${user.name}`);
    } catch (error) {
      console.log(error);
    }
    console.log("handleFormSubmit", this.state)
  }

  formChangeHandler = e => {
    //const { name, value } = event.target;
    this.setState({ 
      [e.target.name]: e.target.value 
    });
    //console.log("handleChange", e.target.value )
  };

  render() {
    //console.log(this.props.user)
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            required
            onChange={e => this.formChangeHandler(e)}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={e => this.formChangeHandler(e)}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={e => this.formChangeHandler(e)}
          />          
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(Signup);
