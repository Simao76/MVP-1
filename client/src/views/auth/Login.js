import React, { Component } from "react";
import { signIn as signInService } from '../../services/auth/auth-service';
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "", 
      password: "" 
    };
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  async formSubmitHandler(e) { 
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const user = await signInService({ email, password });
      this.props.changeAuthenticationStatus(user);
      this.props.history.push(`/profile/${user.name}`);
    } catch (error) {
      console.log(error);
    }
  };

  formChangeHandler = e => {    
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <label>email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            required
            onChange={e => this.formChangeHandler(e)}
          />
          <label>Password:</label>
          <input
            name="password"
            value={this.state.password}
            required
            onChange={e => this.formChangeHandler(e)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have account?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(Login);
