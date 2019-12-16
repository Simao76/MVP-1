import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getSport as getSportService } from "../../../services/Sports";
import LeagueCard from "../../../components/leagueCard/leagueCard";
import "../sports.scss";

class Motorsports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motorsport: ""
    };
  }

  async componentDidMount() {  
    const motorsport = await getSportService("Motorsport");
    this.setState({
      motorsport: motorsport
    })
    //console.log(this.state)
  }  

  render() {    
    const motorsport = this.state.motorsport;  
    
    return (
      <div className="card-container">
        {motorsport &&
          motorsport.map(item => (
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

export default withRouter(Motorsports);
