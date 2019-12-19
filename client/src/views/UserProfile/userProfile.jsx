import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./userProfile.scss";
import { loadUserInformation as loadUserInformationService } from "../../services/auth/auth-service";
import { getUserFollow } from "../../services/user";
class userProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      team: ""
    };
  }
  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      this.setState({
        user
      });
    } catch (error) {
      console.log(error);
    }
    try {
      const userTeams = await getUserFollow(this.state.user._myTeams);
      //const getTeam = await getUserFollow("5df977ea04d5f32d3ccdb167", this.state.user._id)
      //const getEvents = await getEventsService(this.props.match.params.id)
      this.setState({
        team: userTeams
      });
      //console.log(userTeams)
    } catch (err) {
      console.log(err);
      throw err;
    }
    //console.log(this.state.team)
  }

  render() {
    //console.log(this.props.user.profilePic)
    return (
      <div>
        {!this.props.user && (
          <div>
            <p>You're not authorized to view this page</p>
          </div>
        )}

        <div className="profilecard">
          {this.props.user && (
            <div>
              <img
                src={this.props.user.profilePic}
                className="profilePic"
                alt="profile"
              ></img>
              <h1>{this.props.user.name}</h1>
              <p>{this.props.user.name}</p>
              <p>{this.props.user.email}</p>

              <Link to={`/profile/${this.props.user.name}/edit`}>
                Edit profile
              </Link>
              <h4>Following:</h4>
              <br />
              <br />
            </div>
          )}
        </div>

        <div className="profileteams">
          {this.state.team &&
            this.state.team.map(item => (
              <div>
                <h2>{item.name}</h2>
                <p>{item.league}</p>

                <img src={item.badge} alt="" />
                <img src={item.jersey} alt="" />

                <br />
                <br />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default withRouter(userProfile);
