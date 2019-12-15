import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getSport as getSportService } from "../../../services/Sports";
import LeagueCard from "../../../components/leagueCard/leagueCard";
import "../sports.scss";

class Football extends Component {
  constructor(props) {
    super(props);
    this.state = {
      football: ""
    };
  }

  async componentDidMount() {
    const footballLeagues = await getSportService("Soccer");
    this.setState({
      football: footballLeagues
    });
  }

  render() {
    //console.log(this.props.history.location.pathname);
    const leagues = this.state.football;
    return (
      <div className="card-container">
        {leagues &&
          leagues.map(item => (
            <LeagueCard
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

export default withRouter(Football);
