import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/mvp_logo_full.png";
import {signOut as signOutService} from "../../../services/auth/auth-service";
import classes from "./sideMenu.module.scss";

class sideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search: ""
        };
        //this.formSubmissionHandler = this.formSubmissionHandler.bind(this);
        this.signOutHandler = this.signOutHandler.bind(this);
      }

      async signOutHandler() {
        console.log('signout handler')
        try {
          await signOutService();
          this.props.changeAuthenticationStatus(null);
        } catch (error) {
          console.log(error);
        }
      }

      render() {
        let menuClasses = [classes.side_menu]
        if (this.props.show) {
            menuClasses = [classes.side_menu, classes.open]
        }
        
        //console.log(this.props)
        return (
          <nav className={menuClasses.join(" ")}>
              <div className={classes.side_menu_logo}>
                  <img src={Logo} alt="logo" />
              </div>
              <div>
                  <ul>
                      <li onClick={this.props.click}><NavLink to="/soccer">Soccer</NavLink></li>
                      <li onClick={this.props.click}><NavLink to="/basketball">Basketball</NavLink></li>                  
                      {/* <li onClick={this.props.click}><NavLink to="/tennis">Tennis</NavLink></li>   */   }                              
                      <li onClick={this.props.click}><NavLink to="/motorsport">Motosports</NavLink></li>
                      <li onClick={this.props.click}><NavLink to="/fighting">Fighting</NavLink></li>                                            
                  </ul>     
              </div>
              {!this.props.user && (
                <div>
                    <ul>
                    <li onClick={this.props.click}><NavLink to="/login">Login</NavLink></li>
                    <li onClick={this.props.click}><NavLink to="/signup">SignUp</NavLink></li>   
                    </ul>
                </div>
              )}
    
              {this.props.user && (
                <div>
                    <ul>
                        <li onClick={this.props.click}><NavLink to={`/profile/${this.props.user.name}`} onClick={this.props.signOut}>myProfile</NavLink></li>                  
                        <li onClick={this.props.click}><NavLink to="/" onClick={this.signOutHandler}>Logout</NavLink></li> 
                    </ul>
                </div>
              )}    
          </nav>
        )
      }
    
};

export default sideMenu;
