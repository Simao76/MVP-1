import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import Navbar from "./views/Navbar/Navbar";
import Footer from "./views/Footer/Footer";
import Football from "./views/Sports/Football/Football";
import Basketball from "./views/Sports/Basketball/Basketball";
import Tennis from "./views/Sports/Tennis/Tennis";
import Formula1 from "./views/Sports/Formula1/Formula1";
import Fighting from "./views/Sports/Fighting/Fighting";
import Signup from "./views/auth/Signup";
import Login from "./views/auth/Login";
import Confirmation from "./views/auth/Confirmation";

import UserProfile from "./views/UserProfile/userProfile";
import { getFootball as getFootballService } from "./services/Sports";
import { loadUserInformation as loadUserInformationService } from './services/auth/auth-service';
import SearchResults from "./views/Search/SearchResults";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loaded: false,
      search: {
        teams: "",
        players: ""
      },
      sports: "",
      loggedInUser: null
    };
    this.changeAuthenticationStatus = this.changeAuthenticationStatus.bind(this);
    this.verifyAuthentication = this.verifyAuthentication.bind(this);
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      const footballLeagues = await getFootballService();
      console.log(footballLeagues);
      this.setState({
        //user,
        loaded: true,
        sports: footballLeagues
      });
    } catch (error) {
      console.log(error);
    }
    console.log(this.state.user)
  }

  changeAuthenticationStatus(user) {
    this.setState({
      user
    });
  }

  verifyAuthentication() {
    return this.state.user;
  }

  searchResults = (teams, players) => {
    this.setState({
      search: {
        teams: teams,
        players: players
      }
    });
  };

  render() {
    //console.log(this.state.loggedInUser);
    return (
      <div className="App">
        <header>
          <Navbar user={this.state.user} changeAuthenticationStatus={this.changeAuthenticationStatus} getSearch={this.searchResults} />
        </header>

        <main>
          <Switch>
            <Route path="/profile/:name" exact render={props => <UserProfile {...props} user={this.state.user} />} />
            <Route path="/confirmation/:token" exact render={props => <Confirmation {...props} user={this.state.user} />} />
            <Route path="/signup" render={props => <Signup {...props} changeAuthenticationStatus={this.changeAuthenticationStatus} user={this.state.user}/>} />
            <Route path="/login" render={() => <Login changeAuthenticationStatus={this.changeAuthenticationStatus} user={this.state.user} />} />
            <Route path="/football" render={() => <Football sports={this.state.sports} />} />
            <Route path="/basketball" component={Basketball} />
            <Route path="/tennis" component={Tennis} />
            <Route path="/formula1" component={Formula1} />
            <Route path="/fighting" component={Fighting} />
            <Route path="/search/:name" exact render={() => <SearchResults search={this.state.search} />} />
            <Route path="/" component={Home} />
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
