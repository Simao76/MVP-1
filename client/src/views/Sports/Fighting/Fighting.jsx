import React, { Component } from "react";
import { getSport as getSportService } from "../../../services/Sports";
import LeagueCard from "../../../components/leagueCard/leagueCard";
import "../sports.scss";

class Fighting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighting: ""
    };
  }

  async componentDidMount() {
    const fighting = await getSportService("Fighting");
    this.setState({
      fighting: fighting
    });
    //console.log(this.state)
  }

  render() {
    const fighting = this.state.fighting;
    return (
      <div className="card-container">
        {fighting &&
          fighting.map(item => (
            <LeagueCard
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

export default Fighting;
