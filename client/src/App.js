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
import SearchResults from "./views/Search/SearchResults";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  searchResults = data => {
    this.setState({
      search: data
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar getSearch={this.searchResults}/>
        </header>

        <main>
          <Switch>
            <Route path="/football" component={Football} />
            <Route path="/basketball" component={Basketball} />
            <Route path="/tennis" component={Tennis} />
            <Route path="/formula1" component={Formula1} />
            <Route path="/fighting" component={Fighting} />
            <Route path="/search/:name" exact render={() => <SearchResults search={this.state.search}/>}  />
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
