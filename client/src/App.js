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
import EditProfile from "./views/UserProfile/EditProfile";
import { loadUserInformation as loadUserInformationService } from "./services/auth/auth-service";
import SearchResults from "./views/Search/SearchResults";
import SingleLeague from "./views/Sports/SingleLeague/SingleLeague";
import TennisLeague from "./views/Sports/Tennis/TennisLeague";
/* import MotorsportLeague from "./views/Sports/Motorsports/MotorsportLeague";
import FighthingLeague from "./views/Sports/Fighting/FighthingLeague"; */
import SingleTeamMotorsports from "./views/Sports/SingleTeam/SingleTeamMotorsports";
import SingleLeagueFighting from "./views/Sports/SingleLeague/SingleLeagueFighting";
import SingleTeam from "./views/Sports/SingleTeam/SingleTeam";
import SideMenu from "./components/Navbar/SideMenu/SideMenu";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import ErrorPage from "./views/ErrorPage/Error";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

library.add(faBars, faSearch, faThumbsUp, faThumbsDown);

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
      loggedInUser: null,
      sideMenuOpen: false
    };
    this.changeAuthenticationStatus = this.changeAuthenticationStatus.bind(
      this
    );
    this.verifyAuthentication = this.verifyAuthentication.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.menuToggleClickHandler = this.menuToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
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

  updateUser(obj) {
    this.setState({
      user: obj
    });
  }

  menuToggleClickHandler() {
    console.log("menu toggle clicked");
    this.setState({
      sideMenuOpen: true
    });
    console.log(this.state.sideMenuOpen);
  }

  backdropClickHandler() {
    this.setState({
      sideMenuOpen: false
    });
  }

  render() {
    //console.log(this.state.user)

    let backdrop;
    if (this.state.sideMenuOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        {/* <header> */}
        <Navbar
          user={this.state.user}
          changeAuthenticationStatus={this.changeAuthenticationStatus}
          getSearch={this.searchResults}
          menuClickedHandler={this.menuToggleClickHandler}
        />
        <SideMenu
          show={this.state.sideMenuOpen}
          click={this.backdropClickHandler}
          user={this.state.user}
          changeAuthenticationStatus={this.changeAuthenticationStatus}
        />
        {backdrop}
        {/* </header> */}
        <main>
          <Switch>
            <Route
              path="/soccer/:id/:id"
              render={props => <SingleTeam {...props} user={this.state.user} />}
            />
            <Route
              path="/soccer/:id"
              render={props => (
                <SingleLeague {...props} user={this.state.user} />
              )}
            />
            <Route
              path="/soccer"
              render={() => <Football user={this.state.user} />}
            />
            <Route
              path="/basketball/:id/:id"
              render={props => <SingleTeam {...props} user={this.state.user} />}
            />
            <Route
              path="/basketball/:id"
              render={props => (
                <SingleLeague {...props} user={this.state.user} />
              )}
            />
            <Route
              path="/basketball"
              render={() => <Basketball user={this.state.user} />}
            />
            <Route
              path="/tennis/:id"
              render={props => (
                <TennisLeague {...props} user={this.state.user} />
              )}
            />
            <Route path="/tennis" component={Tennis} />

            <Route
              path="/motorsport/:id/:id"
              render={props => <SingleTeam {...props} user={this.state.user} />}
            />

            <Route
              path="/motorsport/:id"
              render={props => (
                <SingleLeague {...props} user={this.state.user} />
              )}
            />
            <Route path="/motorsport" component={Motorsports} />

            <Route
              path="/fighting/:id/:id"
              render={props => <SingleTeam {...props} user={this.state.user} />}
            />

            <Route
              path="/fighting/:id"
              render={props => (
                <SingleLeagueFighting {...props} user={this.state.user} />
              )}
            />

            <Route path="/fighting" component={Fighting} />

            <Route
              path="/profile/:name/edit"
              exact
              render={props => (
                <EditProfile
                  {...props}
                  user={this.state.user}
                  updateUser={this.updateUser}
                />
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
            <Route path="/" exact component={Home} />
            <Route render={() => <ErrorPage />} />
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
