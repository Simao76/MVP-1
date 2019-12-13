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
import SearchResults from "./views/Search/SearchResults";
import "./App.scss";
import Login from "./views/auth/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        teams: "",
        players: ""
      },
      loggedInUser: null
    };
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };
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
            userState={this.state.loggedInUser}
            getSearch={this.searchResults}
          />
        </header>

        <main>
          <Switch>
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            />

            <Route path="/football" component={Football} />
            <Route path="/basketball" component={Basketball} />
            <Route path="/tennis" component={Tennis} />
            <Route path="/formula1" component={Formula1} />
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
