import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/images/mvp_logo_full.png";
import NavigationItems from "./NavigationItems/NavigationItems";
import SessionBtn from "./SessionBtn/SessionBtn";
import {signOut as signOutService} from "../../services/auth/auth-service";
import {
  getTeam as getTeamService,
  getPlayer as getPlayerService
} from "../../services/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.formSubmissionHandler = this.formSubmissionHandler.bind(this);
    this.signOutHandler = this.signOutHandler.bind(this);
  }

  onChangeHandler = e => {
    //console.log(this.state.search)
    //console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async formSubmissionHandler(e) {
    e.preventDefault();
    const { search } = this.state;
    try {
      const teams = await getTeamService({ search });
      const players = await getPlayerService({ search });
      const searchFor = this.state.search;
      this.props.getSearch(teams, players);
      this.props.history.push(`/search/${searchFor}`);
    } catch (error) {
      console.log(error);
    }
    this.setState({
      search: ""
    })
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
    //console.log(this.props)
    return (
      <nav>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <NavigationItems />
        <div className="spacer"></div>
        <div className="otherLinks">        
          <div className="search">
            <form onSubmit={this.formSubmissionHandler} className="searchBox">
              <input className="searchInput"
                type="search"
                name="search"
                value={this.state.search}
                placeholder="search clubs or players"
                onChange={this.onChangeHandler}
              ></input>
                          </form>        
          </div>
          {this.props.user && (
            <div className="profilePic-container">
              <Link to={`/profile/${this.props.user.name}`}><img src={this.props.user.profilePic} alt="" className="profilePicNav"/></Link>
            </div>
          )}
          <SessionBtn user={this.props.user} signOut={this.signOutHandler}/>
        </div>        
        <div className="burger-menu"><FontAwesomeIcon icon="bars"/></div>
      </nav>
    );
  }
}



export default withRouter(Navbar);
