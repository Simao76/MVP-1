import React, { Component } from "react";
import "./userProfile.scss"; 
import { loadUserInformation as loadUserInformationService } from "../../services/auth/auth-service";
import { getUserFollow } from '../../services/user'

class userProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      team: ""
    }
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
      //console.log(this.state.user)
      const userTeams =  await getUserFollow(this.state.user._myTeams)
      //const getTeam = await getUserFollow("5df977ea04d5f32d3ccdb167", this.state.user._id)
      //const getEvents = await getEventsService(this.props.match.params.id)
      this.setState({
        team: userTeams,
      })        
    }
    catch(err) {
      console.log(err);
      throw(err);
    }
    console.log(this.state.team) 
    //console.log(this.state.user._myTeams)
  }

  render () {
    return (
      <div>
        {!this.props.user && (
          <div>
            <p>You're not authorized to view this page</p>
          </div>
        )}
  
        {this.props.user && (
          <div>
            <h1>{this.props.user.name}</h1>
            <p>{this.props.user.name}</p>
            <p>{this.props.user.email}</p>
            <img
              src={this.props.user.profilePic}
              className="profilePic"
              alt="profile"
            ></img>
            <h4>Following:</h4>
          </div>
        )}

        {this.state.team && (
          <div>
          <p>{this.state.team.name}</p>
          <img src={this.state.team.jersey} alt=""/>
          </div>
        )}
      </div>
    );
  }
  
};

export default userProfile;
