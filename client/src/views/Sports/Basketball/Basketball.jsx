import React, { Component } from "react";
import { getSport as getSportService } from "../../../services/Sports";
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
    const basketballLeagues = await getSportService("Basketball");
    this.setState({
      basketball: basketballLeagues
    })
  }  

  render() {
    const leagues = this.state.basketball;    
    return (
      <div className="card-container">
        {leagues &&
          leagues.map(item => (
            <LeagueCard
              key={item.idLeague}
              src={item.badge}
              alt={item.name}
              title={item.name}        
            />            
          ))}                 
      </div>
    );
  } 
}

export default Basketball;
