import React, { Component } from "react";
import { getSport as getSportService } from "../../../services/Sports";
import LeagueCard from "../../../components/leagueCard/leagueCard";
import "../sports.scss";

class Tennis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tennis: ""
    };
  }

  async componentDidMount() {  
    const tennis = await getSportService("Tennis");
    this.setState({
      tennis: tennis
    })
    console.log(this.state)
  }  

  render() {    
    const tennis = this.state.tennis;    
    return (
      <div className="card-container">
        {tennis &&
          tennis.map(item => (
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

export default Tennis;
