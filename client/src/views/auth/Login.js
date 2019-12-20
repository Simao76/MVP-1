import React, { Component } from "react";
import { signIn as signInService } from '../../services/auth/auth-service';
import { Link, withRouter } from "react-router-dom";
import LoginImage from '../../assets/images/login.png';
import "./login.scss";

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
      <div className="login-form-container">
        <div className="login-form">
        <img src={LoginImage} alt="" className="login-image"/>
          <form onSubmit={this.formSubmitHandler}>
            <div>
              <label>email</label>
              <input
                type="emal"
                name="email"
                value={this.state.email}
                required
                onChange={e => this.formChangeHandler(e)}
              />
            </div>
            <div>
              <label>password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                required
                onChange={e => this.formChangeHandler(e)}
              />
              <button type="submit" className="login-button">Login</button>
            </div>          
          </form>
          <div className="extra">
            <p>Don't have an account?</p>            
            <span><Link to={"/signup"}> Signup</Link></span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
