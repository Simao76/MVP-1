import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./userProfile.scss";
import { loadUserInformation as loadUserInformationService } from "../../services/auth/auth-service";
import { getUserFollow } from "../../services/user";
import UserTeamCard from "./userTeamCard";

class userProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      teams: []
      /* events: "" */
    };
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      this.setState({
        user
        /* events: getEvents */
      });
    } catch (error) {
      console.log(error);
    }
    try {
      console.log("Loading user teams");
      const userTeams = await getUserFollow(this.state.user._myTeams);
      console.log("LoadEd user teams", userTeams);
      //const getTeam = await getUserFollow("5df977ea04d5f32d3ccdb167", this.state.user._id)
      //const getEvents = await getEventsByTeamId(this.props.match.params.id);
      this.setState({
        teams: userTeams
      });
      //console.log(userTeams)
    } catch (err) {
      console.log(err);
      throw err;
    }
    //console.log(this.state.team)
  }

  render() {
    const teams = this.state.teams;
    /* const events = this.state.events; */
    //console.log(this.props.user.profilePic)
    console.log("here", this.state.events);
    console.log("here user", this.state.userTeams);
    return (
      <div>
        {!this.props.user && (
          <div>
            <p>You're not authorized to view this page</p>
          </div>
        )}       
        {this.props.user && (
          <div className="profilecard">
            <img
              src={this.props.user.profilePic}
              className="profilePic"
              alt="profile"
            ></img>

            <div className="profilecardinfo">
              <h1>{this.props.user.name}</h1>

              <Link
                to={`/profile/${this.props.user.name}/edit`}
                className="editprofilebtn"
              >
                Edit profile
              </Link>
            </div>
          </div>
        )}

        <div className="results-container">
          {teams &&
            teams.map(item => (
              <UserTeamCard
              
                  {...this.props}
                  key={item.idTeam}
                  mongooseId={item._id}
                  id={item.idTeam}
                  src={item.badge}
                  alt={item.name}
                  title={item.name}
                  team={item}
                />
              
            ))}
        </div>
      </div>
    );
  }
}

export default withRouter(userProfile);
