import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getOneTeam as geTeamService } from "../../../services/Sports";
//import LikeBtn from '../../../components/Buttons/likeBtn';

class SingleTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: "",
      events: ""
    };
  }
  async componentDidMount() {
    try {
      const getTeam = await geTeamService(this.props.match.params.id);
      //const getEvents = await getEventsService(this.props.match.params.id)
      this.setState({
        team: getTeam
      });
      //console.log(this.state.events)
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  render() {
    const team = this.state.team;
    console.log(team);
    return (
      <div>
        {team &&
          team.map(item => (
            <div key={item.idTeam}>
              <img src={item.banner} alt=""></img>

              <div>
                <h3>{item.name}</h3>
              </div>

              <div>
                <h6>Founded in: {item.intFormedYear}</h6>
              </div>
              <div>
                <h4>{item.league}</h4>
              </div>

              <div>{item.description}</div>

              <div>
                <img src={item.badge} alt=""></img>
              </div>
              <div>
                <img src={item.jersey} alt=""></img>
              </div>

              <div id="Stadium info">
                <h2>Stadium</h2>
                <div>
                  <h4>Name: {item.stadium}</h4>
                </div>

                <div>
                  <h4>Location: {item.stadiumLocation}</h4>
                </div>

                <div>{item.stadiumDescription}</div>
              </div>
              <br></br>
              <br></br>
              <div>
                <a href={item.website}>Official Website</a>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default withRouter(SingleTeam);
