import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Logo from "../../../assets/images/mvp_logo_full.png";
import {signOut as signOutService} from "../../../services/auth/auth-service";
import { getTeamsfromDB as getTeamService, getPlayer as getPlayerService} from "../../../services/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from "./sideMenu.module.scss";

class sideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search: ""
        };
        this.formSubmissionHandler = this.formSubmissionHandler.bind(this);
        this.signOutHandler = this.signOutHandler.bind(this);
      }

      onChangeHandler = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

     async formSubmissionHandler(e) {
        e.preventDefault();
        const { search } = this.state;
        try {
          const teams = await getTeamService(search);
          const players = await getPlayerService({ search });
          const searchFor = this.state.search;
          this.props.getSearch(teams, players);
          this.props.history.push(`/search/${searchFor}`);      
        } catch (error) {
          console.log(error);
        }        
        this.props.click();
        this.setState({
          search: ""
        })
      }

      async signOutHandler() {
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

              <div className={classes.side_search}>
                <form onSubmit={this.formSubmissionHandler} className={classes.side_searchBox}>
                  <input className={classes.side_searchInput}
                    type="search"
                    name="search"
                    value={this.state.search}
                    placeholder="search clubs or players"
                    onChange={this.onChangeHandler}
                  ></input>
                  <button className={classes.side_menu_button}><FontAwesomeIcon icon="search"/></button>
                </form>        
              </div>

              <div>
                  <ul>
                      <li onClick={this.props.click}><NavLink to="/soccer">Soccer</NavLink></li>
                      <li onClick={this.props.click}><NavLink to="/basketball">Basketball</NavLink></li>                         
                      <li onClick={this.props.click}><NavLink to="/baseball">Baseball</NavLink></li>
                      <li onClick={this.props.click}><NavLink to="/americanfootball">American Football</NavLink></li>                                            
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

export default withRouter(sideMenu);
