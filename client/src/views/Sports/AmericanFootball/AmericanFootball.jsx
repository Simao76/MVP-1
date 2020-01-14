import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getSport as getSportService } from "../../../services/Sports";
import LeagueCard from "../../../components/leagueCard/leagueCard";
import "../sports.scss";

class AmericanFootball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      americanFootball: ""
    };
  }

  async componentDidMount() {
    const americanFootballLeagues = await getSportService("American Football");
    this.setState({
      americanFootball: americanFootballLeagues
    });
  }

  render() {
    const leagues = this.state.americanFootball;
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

export default withRouter(AmericanFootball);
