import React, { Component, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/UI/Loading/loading";
import { loadUserInformation as loadUserInformationService } from "./services/auth/auth-service";
import SideMenu from "./components/Navbar/SideMenu/SideMenu";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

library.add(faBars, faSearch, faThumbsUp, faThumbsDown);

const Home = React.lazy(() => import("./views/Home/Home"));
const Football = React.lazy(() => import("./views/Sports/Football/Football"));
const Basketball = React.lazy(() =>
  import("./views/Sports/Basketball/Basketball")
);
const Motorsports = React.lazy(() =>
  import("./views/Sports/Motorsports/Motorsports")
);
const Fighting = React.lazy(() => import("./views/Sports/Fighting/Fighting"));
const Signup = React.lazy(() => import("./views/auth/Signup"));
const Login = React.lazy(() => import("./views/auth/Login"));
const SingleLeague = React.lazy(() =>
  import("./views/Sports/SingleLeague/SingleLeague")
);
const SingleTeam = React.lazy(() =>
  import("./views/Sports/SingleTeam/SingleTeam")
);
const SingleTeamMotorsports = React.lazy(() =>
  import("./views/Sports/SingleTeam/SingleTeamMotorsports")
);
const SingleLeagueFighting = React.lazy(() =>
  import("./views/Sports/SingleLeague/SingleLeagueFighting")
);
const UserProfile = React.lazy(() => import("./views/UserProfile/userProfile"));
const EditProfile = React.lazy(() => import("./views/UserProfile/EditProfile"));
const SearchResults = React.lazy(() => import("./views/Search/SearchResults"));
const ErrorPage = React.lazy(() => import("./views/ErrorPage/Error"));

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
    //console.log("menu toggle clicked");
    this.setState({
      sideMenuOpen: true
    });
    //console.log(this.state.sideMenuOpen);
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
          user={this.state.user}
          click={this.backdropClickHandler}
          getSearch={this.searchResults}
          changeAuthenticationStatus={this.changeAuthenticationStatus}
        />
        {backdrop}
        {/* </header> */}
        <main>
          <Switch>
            <Route
              path="/soccer/:id/:id"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <SingleTeam {...props} user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/soccer/:id"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <SingleLeague {...props} user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/soccer"
              render={() => (
                <Suspense fallback={<Loading />}>
                  <Football user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/basketball/:id/:id"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <SingleTeam {...props} user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/basketball/:id"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <SingleLeague {...props} user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/basketball"
              render={() => (
                <Suspense fallback={<Loading />}>
                  <Basketball user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/motorsport/:id/:id"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <SingleTeam {...props} user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/motorsport/:id"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <SingleLeague {...props} user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/motorsport"
              render={() => (
                <Suspense fallback={<Loading />}>
                  <Motorsports user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/fighting/:id/:id"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <SingleTeam {...props} user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/fighting/:id"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <SingleLeagueFighting {...props} user={this.state.user} />
                </Suspense>
              )}
            />

            <Route
              path="/fighting"
              render={() => (
                <Suspense fallback={<Loading />}>
                  <Fighting user={this.state.user} />
                </Suspense>
              )}
            />

            {/* <Route
              path="/profile/:name/edit"
              exact
              render={props => (
                <EditProfile
                  {...props}
                  user={this.state.user}
                  updateUser={this.updateUser}
                />
              )}
              /> */}

            <Route
              path="/profile/:name/edit"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <EditProfile
                    {...props}
                    user={this.state.user}
                    updateUser={this.updateUser}
                  />
                  />
                </Suspense>
              )}
            />

            {/* <Route
              path="/profile/:name"
              exact
              render={props => (
                <UserProfile {...props} user={this.state.user} />
              )}
            /> */}

            <Route
              path="/profile/:name"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <UserProfile {...props} user={this.state.user} />
                </Suspense>
              )}
            />

            {/* <Route
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  changeAuthenticationStatus={this.changeAuthenticationStatus}
                  user={this.state.user}
                />
              )}
            /> */}

            <Route
              path="/signup"
              render={props => (
                <Suspense fallback={<Loading />}>
                  <Signup
                    {...props}
                    changeAuthenticationStatus={this.changeAuthenticationStatus}
                    user={this.state.user}
                  />
                </Suspense>
              )}
            />

            {/* <Route
              path="/login"
              render={() => (
                <Login
                  changeAuthenticationStatus={this.changeAuthenticationStatus}
                  user={this.state.user}
                />
              )}
            /> */}

            <Route
              path="/login"
              render={() => (
                <Suspense fallback={<Loading />}>
                  <Login
                    changeAuthenticationStatus={this.changeAuthenticationStatus}
                    user={this.state.user}
                  />
                </Suspense>
              )}
            />

            <Route
              path="/search/:name"
              render={() => (
                <Suspense fallback={<Loading />}>
                  <SearchResults search={this.state.search} />
                </Suspense>
              )}
            />

            <Route
              path="/"
              exact
              render={() => (
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              )}
            />

            <Route
              render={() => (
                <Suspense fallback={<Loading />}>
                  <ErrorPage />
                </Suspense>
              )}
            />
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
