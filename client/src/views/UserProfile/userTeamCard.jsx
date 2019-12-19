import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
//import { getOneTeam as getTeamService } from "../../services/Sports";
import { getEventsByTeamId } from "../../services/Sports";
import "./userTeamCard.scss";
//import LikeBtn from '../../../components/Buttons/likeBtn';

const EventItem = item =>
  (item.strHomeTeam && item.strAwayTeam && (
    <p>
      {item.strHomeTeam} <strong>{item.intHomeScore}</strong> <em>vs</em>{" "}
      {item.strAwayTeam} <strong>{item.intAwayScore}</strong>
    </p>
  )) || <p>{item.strEvent}</p>;

class UserTeamCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: ""
    };
  }

  async componentDidMount() {
    try {
      const getEvents = await getEventsByTeamId(this.props.id);
      this.setState({
        events: getEvents
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  render() {
    const events = this.state.events;
    const team = this.props.team;
    //console.log(this.props)
    return (
      <Link to={`/${team.sport.toLowerCase()}/${team.idLeague}/${team._id}`}>
      <div className="user-team-card">
        <div class="team-badge">
          <img src={team.badge} alt=""></img>
        </div>
        <div className="team-info">
          <h3>{team.name}</h3>
          <h4>{team.league}</h4>
          <div className="team-events">
            <div>
              <h3>Next Events</h3>
              {events[0] &&
                events[0].map(item => (
                  <EventItem key={item.idEvent} {...item} />
                ))}
            </div>
            <div>
              <h3>Latest Events</h3>
              {events[1] && events[1].map(item => <EventItem {...item} />)}
            </div>
          </div>
        </div>
      </div>
      </Link>
    );
  }
}

export default withRouter(UserTeamCard);
