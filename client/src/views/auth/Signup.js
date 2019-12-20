import React, { Component } from "react";
import { signUp as signUpService } from '../../services/auth/auth-service';
import { Link, withRouter } from "react-router-dom";
import SignupImage from '../../assets/images/signup.png';
import "./signup.scss";

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
    //console.log("handleFormSubmit", this.state)
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
      <div className="signup-form-container">
        <div className="signup-form">
        <img src={SignupImage} alt="" className="signup-image"/>
        <form onSubmit={this.formSubmitHandler}>
          <div>          
            <label>username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={e => this.formChangeHandler(e)}
            />
          </div>
          <div>
            <label>email</label>
            <input
              type="email"
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
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="extra">
          <p>Already have account?</p>
          <span><Link to={"/login"}> Login</Link></span>         
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
