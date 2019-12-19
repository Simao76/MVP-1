import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { getOneTeam as geTeamService } from "../../../services/Sports";
import { getEventsByTeamId } from "../../../services/Sports";
//import LikeBtn from '../../../components/Buttons/likeBtn';
import "./SingleTeam.scss";

class SingleTeamMotorsports extends Component {
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
      const getEvents = await getEventsByTeamId(this.props.match.params.id);
      this.setState({
        team: getTeam,
        events: getEvents
      });
      console.log(this.state.events);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  render() {
    const events = this.state.events;
    const team = this.state.team;
    console.log(team);
    return (
      <div>
        {team &&
          team.map(item => (
            <div key={item.idTeam}>
              <img src={item.banner} alt=""></img>
            </div>
          ))}

        <div>
          <h3>Latest games</h3>
          {events[0] &&
            events[0].map(el => (
              <Fragment key={el.idEvent}>
                <p>
                  <strong>{el.strEvent}</strong>
                </p>
                <div>
                  <p>
                    {el.strHomeTeam} {el.intHomeScore}
                  </p>
                  <p>
                    {el.strAwayTeam} {el.intHomeScore}
                  </p>
                </div>
                <div></div>
              </Fragment>
            ))}
        </div>

        <div>
          <h3>Next games</h3>
          {events[1] &&
            events[1].map(el => (
              <Fragment key={el.idEvent}>
                <p>
                  <strong>{el.strEvent}</strong>
                </p>
                <div>
                  <p>
                    {el.strHomeTeam} {el.intHomeScore}
                  </p>
                  <p>
                    {el.strAwayTeam} {el.intHomeScore}
                  </p>
                </div>
              </Fragment>
            ))}
        </div>

        <div>
          {team &&
            team.map(item => (
              <div key={item.idTeam}>
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
                  <h2>Headquarters</h2>
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
      </div>
    );
  }
}

export default withRouter(SingleTeamMotorsports);
