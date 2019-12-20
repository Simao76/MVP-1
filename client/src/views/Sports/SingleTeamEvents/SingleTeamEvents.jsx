import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { getEventsByTeamId as getEventsByTeamIdService } from "../../../services/Sports";

class SingleTeamEvents extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      events: ""
    };
  }

  async componentDidMount() {
    try {
      //const getTeams = await getTeamsService(this.props.match.params.id)
      const getEventsbyTeamID = await getEventsByTeamIdService(
        this.props.match.params.id
      );
      this.setState({
        //teams: getTeams
        events: getEvents
      });
      //console.log(this.state.events);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  render() {
    //console.log("singleteamevents");
    const events = this.state.events;
    //console.log(this.props.match)
    console.log(events);

    return (
      <div>
        <div>
          <h3>Next games</h3>
          {events[1] &&
            events[1].map(el => (
              <Fragment key={el.idEvent}>
                <p>
                  <strong>{el.strEvent}</strong>
                </p>
                <div>
                  <p> {el.strTime} </p>
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
        <br></br>
        <br></br>
        <div>
          <h3>Last games</h3>
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
      </div>
    );
  }
}

export default withRouter(SingleTeamEvents);
