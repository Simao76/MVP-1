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
    //console.log(this.props.user)
  }

  render() {
    //console.log(this.props.user)
    //console.log(this.props.history.location.pathname);
    const leagues = this.state.football;
    return (
      <div className="card-container">
        {leagues &&
          leagues.map(item => (
            <LeagueCard
              user={this.props.user}
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

export default withRouter(Football);
