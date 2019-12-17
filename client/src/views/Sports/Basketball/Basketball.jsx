import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getSport as getSportService } from "../../../services/Sports";
import { getEventsByTeamId } from "../../../services/Sports";
import LeagueCard from "../../../components/leagueCard/leagueCard";
import "../sports.scss";

class Basketball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basketball: ""
    };
  }

  async componentDidMount() {
    const teamEvents = await getEventsByTeamId("135626");
    //console.log(teamEvents);
    const basketballLeagues = await getSportService("Basketball");
    this.setState({
      basketball: basketballLeagues
    });
  }

  render() {
    const leagues = this.state.basketball;
    return (
      <div className="card-container">
        {leagues &&
          leagues.map(item => (
            <LeagueCard
              {...this.props}
              mongooseId={item._id}
              key={item.idLeague}
              id={item.idLeague}
              src={item.badge}
              alt={item.name}
              title={item.name}
            />
          ))}
      </div>
    );
  }
}

export default withRouter(Basketball);
