import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import {
  getEvents as getEventsService,
  getTeams as getTeamsService
} from "../../../services/Sports";
import TeamCard from "../../../components/teamCard/teamCard";
import LikeBtn from "../../../components/Buttons/likeBtn";
import "./singleLeague.scss";

class SingleLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: "",
      events: ""
    };
  }

  async componentDidMount() {
    try {
      const getTeams = await getTeamsService(this.props.match.params.id);
      const getEvents = await getEventsService(this.props.match.params.id);
      this.setState({
        teams: getTeams,
        events: getEvents
      });
      //console.log(this.state.events)
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  render() {
    const events = this.state.events;
    const teams = this.state.teams;

    return (
      <div>
        <div>
          <div className="card-container">
            {teams &&
              teams.map(item => (
                <Fragment key={item.idTeam}>
                  <TeamCard
                    {...this.props}
                    key={item.idTeam}
                    mongooseId={item._id}
                    id={item.idTeam}
                    src={item.badge}
                    alt={item.name}
                    title={item.name}
                  />
                  <LikeBtn />
                </Fragment>
              ))}
          </div>

          {events && (
            <div className="results-card">
              <div>
                <h3>Latest Events</h3>
                {events[0] &&
                  events[0].map(el => (
                    <Fragment key={el.idEvent}>
                      <p>{/* <strong>{el.strEvent}</strong> */}</p>
                      <div>
                        <br></br>
                        <p>
                          {el.strHomeTeam} {el.intHomeScore}
                          <strong> vs </strong>
                          {el.strAwayTeam} {el.intAwayScore}
                        </p>

                        {/* <br></br> */}
                      </div>
                      <div></div>
                    </Fragment>
                  ))}
              </div>
              <div>
                {events && <h3>Next Events</h3>}

                {events[1] &&
                  events[1].map(el => (
                    <Fragment key={el.idEvent}>
                      <p>{/* <strong>{el.strEvent}</strong> */}</p>
                      <div>
                        <br></br>
                        <p>
                          {el.strHomeTeam} {el.intHomeScore}
                          <strong> vs </strong>
                          {el.strAwayTeam} {el.intAwayScore}
                        </p>

                        {/* <br></br> */}
                      </div>
                    </Fragment>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(SingleLeague);
