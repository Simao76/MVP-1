import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.scss";
import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Football from "./views/Sports/Football/Football";
import Basketball from "./views/Sports/Basketball/Basketball";
import Tennis from "./views/Sports/Tennis/Tennis";
import Motorsports from "./views/Sports/Motorsports/Motorsports";
import Fighting from "./views/Sports/Fighting/Fighting";
import Signup from "./views/auth/Signup";
import Login from "./views/auth/Login";
import Confirmation from "./views/auth/Confirmation";
import UserProfile from "./views/UserProfile/userProfile";
import { loadUserInformation as loadUserInformationService } from "./services/auth/auth-service";
import SearchResults from "./views/Search/SearchResults";
import SingleLeague from "./views/Sports/SingleLeague/SingleLeague";
//import FootballLeague from "./views/Sports/Football/FootballLeague";
//import BasketballLeague from "./views/Sports/Basketball/BasketballLeague";
import TennisLeague from "./views/Sports/Tennis/TennisLeague";
import MotorsportLeague from "./views/Sports/Motorsports/MotorsportLeague";
import FighthingLeague from "./views/Sports/Fighting/FighthingLeague";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

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
    this.changeAuthenticationStatus = this.changeAuthenticationStatus.bind(
      this
    );
    this.verifyAuthentication = this.verifyAuthentication.bind(this);
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      this.setState({
        user,
        loaded: true
      });
    } catch (error) {
      console.log(error);
    }
    //console.log(this.state.user)
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
          <Navbar
            user={this.state.user}
            changeAuthenticationStatus={this.changeAuthenticationStatus}
            getSearch={this.searchResults}
          />
        </header>

        <main>
          <Switch>
            <Route
              path="/football/:id"
              render={props => (
                <SingleLeague {...props} user={this.state.user} />
              )}
            />
            <Route path="/football" render={() => <Football />} />
            <Route
              path="/basketball/:id"
              render={props => (
                <SingleLeague {...props} user={this.state.user} />
              )}
            />
            <Route path="/basketball" render={() => <Basketball />} />
            <Route
              path="/tennis/:id"
              render={props => (
                <TennisLeague {...props} user={this.state.user} />
              )}
            />
            <Route path="/tennis" component={Tennis} />
            <Route
              path="/motorsports/:id"
              render={props => (
                <MotorsportLeague {...props} user={this.state.user} />
              )}
            />
            <Route path="/motorsports" component={Motorsports} />
            <Route
              path="/fighting/:id"
              render={props => (
                <FighthingLeague {...props} user={this.state.user} />
              )}
            />
            <Route
              path="/profile/:name"
              exact
              render={props => (
                <UserProfile {...props} user={this.state.user} />
              )}
            />
            <Route
              path="/confirmation/:token"
              exact
              render={props => (
                <Confirmation {...props} user={this.state.user} />
              )}
            />
            <Route
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  changeAuthenticationStatus={this.changeAuthenticationStatus}
                  user={this.state.user}
                />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <Login
                  changeAuthenticationStatus={this.changeAuthenticationStatus}
                  user={this.state.user}
                />
              )}
            />
            <Route path="/fighting" component={Fighting} />
            <Route
              path="/search/:name"
              exact
              render={() => <SearchResults search={this.state.search} />}
            />
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
