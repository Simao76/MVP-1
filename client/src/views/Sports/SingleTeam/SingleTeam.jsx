import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { getOneTeam as geTeamService } from "../../../services/Sports";
import { getEventsByTeamId } from "../../../services/Sports";
import "./SingleTeam.scss";
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
    //console.log(team);
    return (
      <div>
        {team &&
          team.map(item => (
            <div key={item.idTeam} className="Banner">
              <img src={item.banner} alt=""></img>
            </div>
          ))}

        <div>
          {team &&
            team.map(item => (
              <div key={item.idTeam}>
                <div className="head-description-card">
                  <div className="team-head">
                    <div>
                      <h2>{item.name}</h2>
                    </div>
                    <div>
                      <h6>Founded in: {item.intFormedYear}</h6>
                    </div>
                    <div>
                      <h4>{item.league}</h4>
                    </div>
                  </div>

                  <div className="team-badge-description">
                    <div>
                      <img src={item.badge} alt=""></img>
                    </div>

                    <div
                      className="team-description"
                      style={{ overflow: "scroll", overflowX: " hidden" }}
                    >
                      <p> {item.description} </p>
                    </div>
                  </div>
                </div>

                <div className="head-description-card">
                  <div className="stadium-head">
                    <h2>Stadium</h2>
                    <div>
                      <h4>Headquarters: {item.stadium}</h4>
                    </div>
                    <div>
                      <h4>Location: {item.stadiumLocation}</h4>
                    </div>
                  </div>

                  <div className="description-stadium-card">
                    <img src={item.jersey} alt=""></img>
                    <div
                      className="description-stadium"
                      style={{ overflow: "scroll", overflowX: " hidden" }}
                    >
                      <p>{item.stadiumDescription}</p>
                    </div>
                  </div>
                </div>

                <div className="getTickets-link">
                  <a href={"http://" + item.website}>
                    <h2>Get tickets</h2>
                  </a>
                </div>
              </div>
            ))}
        </div>

        <div className="results-card">
          <div>
            {events && <h3>Next Events</h3>}
            {events[0] &&
              events[0].map(el => (
                <Fragment key={el.idEvent}>
                  <p>{/* <strong>{el.strEvent}</strong> */}</p>
                  <div>
                    <br></br>
                    <p>
                      {el.strHomeTeam} {el.intHomeScore}
                      <em> vs </em>
                      {el.strAwayTeam} {el.intHomeScore}
                    </p>
                    <hr></hr>
                    {/* <br></br> */}
                  </div>
                  <div></div>
                </Fragment>
              ))}
          </div>
          <div>
            {events && <h3>Latest Events</h3>}

            {events[1] &&
              events[1].map(el => (
                <Fragment key={el.idEvent}>
                  <p>{/* <strong>{el.strEvent}</strong> */}</p>
                  <div>
                    <br></br>
                    <p>
                      {el.strHomeTeam} {el.intHomeScore}
                      <em> vs </em>
                      {el.strAwayTeam} {el.intHomeScore}
                    </p>
                    <hr></hr>
                    {/* <br></br> */}
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SingleTeam);
